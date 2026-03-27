import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import nodemailer from 'nodemailer'

export async function GET(request: NextRequest) {
  const token = request.headers.get('x-admin-key')
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const client = await clientPromise
    const db = client.db('engelandengel')

    // Verify session token
    const admin = await db.collection('raffle_admin').findOne({ sessionToken: token })
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if winner already selected
    const existingWinner = await db.collection('raffle_winner').findOne({})
    const checkOnly = request.headers.get('x-check-winner')

    if (checkOnly === 'true') {
      return NextResponse.json({ success: true, winner: existingWinner || null, alreadySelected: !!existingWinner })
    }

    // If winner already picked, return them
    if (existingWinner) {
      return NextResponse.json({ success: true, winner: existingWinner, alreadySelected: true })
    }

    // Pick random winner
    const entries = await db.collection('raffle_entries').find({}).toArray()
    if (entries.length === 0) {
      return NextResponse.json({ error: 'No entries found' }, { status: 404 })
    }

    const winner = entries[Math.floor(Math.random() * entries.length)]

    // Save winner to database
    await db.collection('raffle_winner').insertOne({
      name: winner.name,
      email: winner.email,
      phone: winner.phone,
      company: winner.company,
      selectedAt: new Date().toISOString(),
    })

    // Send winner notification email
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      const fromAddress = `"Engel & Engel" <${process.env.SMTP_USER}>`

      await transporter.sendMail({
        from: fromAddress,
        to: winner.email,
        subject: "Congratulations! You've Won! – Engel & Engel Raffle",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; background: #ffffff;">
            <div style="background: #172554; padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 22px;">Engel & Engel, LLP</h1>
              <p style="color: #D4AF37; margin: 5px 0 0; font-size: 11px; letter-spacing: 3px; text-transform: uppercase;">Forensic Accountants</p>
            </div>
            <div style="padding: 30px; text-align: center;">
              <div style="background: #D4AF37; color: #172554; font-size: 12px; font-weight: bold; letter-spacing: 3px; text-transform: uppercase; display: inline-block; padding: 6px 20px; margin-bottom: 20px;">Winner</div>
              <h2 style="color: #172554; margin: 0 0 10px; font-size: 26px;">Congratulations, ${winner.name}!</h2>
              <p style="color: #64748b; line-height: 1.6; margin: 0 0 20px;">
                You've been selected as the winner of the <strong style="color: #172554;">Meta Ray-Ban Smart Glasses</strong> raffle!
              </p>
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; margin: 0 0 20px; text-align: left;">
                <p style="margin: 0 0 5px; color: #334155; font-size: 14px;"><strong>Name:</strong> ${winner.name}</p>
                <p style="margin: 0 0 5px; color: #334155; font-size: 14px;"><strong>Email:</strong> ${winner.email}</p>
                <p style="margin: 0 0 5px; color: #334155; font-size: 14px;"><strong>Phone:</strong> ${winner.phone}</p>
                <p style="margin: 0; color: #334155; font-size: 14px;"><strong>Company:</strong> ${winner.company}</p>
              </div>
              <p style="color: #64748b; font-size: 13px; line-height: 1.6; margin: 0;">
                A member of our team will be in touch shortly to arrange delivery of your prize. Thank you for participating!
              </p>
            </div>
            <div style="background: #f8fafc; padding: 15px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #94a3b8; font-size: 11px; margin: 0;">Engel & Engel LLP &bull; 350 S Grand Avenue, Suite 3160, Los Angeles, CA 90071</p>
            </div>
          </div>
        `,
      })

      console.log(`[RAFFLE] Winner email sent to ${winner.name} (${winner.email})`)
    } catch (emailError) {
      console.error('[RAFFLE] Winner email failed:', emailError)
    }

    return NextResponse.json({ success: true, winner, totalEntries: entries.length })
  } catch (error) {
    console.error('Error selecting winner:', error)
    return NextResponse.json({ error: 'Failed to select winner' }, { status: 500 })
  }
}
