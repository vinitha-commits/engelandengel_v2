'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function RafflePage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/raffle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await res.json()
      if (!res.ok) throw new Error(result.error)
      setIsSubmitted(true)
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        {/* Modal card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">

            {/* Left panel — visual */}
            <div className="md:col-span-2 bg-primary-950 relative p-8 md:p-10 flex flex-col justify-between min-h-[200px] md:min-h-[580px] overflow-hidden">
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src="https://engelandengel.com/wp-content/uploads/2022/02/forensic-accounting-los-angeles-scaled.jpg"
                  alt=""
                  fill
                  className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary-950/60 via-primary-950/80 to-primary-950" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <Link href="/">
                  <Image src="/images/logo-accountants-white-font.png" alt="Engel & Engel" width={220} height={45} />
                </Link>
              </div>

              <div className="relative z-10">
                <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.4em] uppercase">Event Raffle</span>
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mt-3 mb-4">
                  Enter for a Chance to{' '}
                  <span className="font-serif italic text-[#D4AF37] font-medium">Win</span>
                </h1>
                <p className="text-white/70 text-lg font-semibold mb-2">Meta Ray-Ban Smart Glasses</p>
                <div className="h-[2px] w-12 bg-[#D4AF37] mb-4" />
                <p className="text-white/40 text-sm font-light leading-relaxed">
                  Fill out the form to enter our drawing. Winner will be announced at the event.
                </p>
              </div>

              <div className="relative z-10 hidden md:block">
                <div className="h-px bg-white/10 mb-4" />
                <p className="text-white/20 text-[10px] tracking-wider">350 S Grand Avenue, Suite 3160, Los Angeles, CA 90071</p>
              </div>
            </div>

            {/* Right panel — form */}
            <div className="md:col-span-3 p-8 md:p-10 lg:p-12">

              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 tracking-tight">Your Details</h2>
                    <p className="text-gray-400 text-sm mt-1">All fields are required to enter the raffle.</p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-red-50 border border-red-100 text-red-500 px-4 py-2.5 text-sm rounded-lg mb-5"
                      >
                        {error}
                      </motion.div>
                    )}

                    {/* 2-column grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/10 transition-all"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/10 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="(310) 555-0100"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/10 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Company / Firm</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          placeholder="Smith & Associates"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/10 transition-all"
                        />
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-100 my-6" />

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#D4AF37] text-white font-bold text-sm tracking-wider uppercase rounded-lg hover:bg-primary-950 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Entry'}
                    </button>

                    <p className="text-center text-gray-300 text-[11px] mt-4">
                      One entry per person. Winner will be selected at the event.
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center h-full py-8 md:py-16 text-center px-4"
                >
                  {/* Animated checkmark */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 150, damping: 15 }}
                    className="w-24 h-24 rounded-full bg-primary-950 flex items-center justify-center mb-8 shadow-lg"
                  >
                    <svg className="w-12 h-12 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">You're In!</h2>
                    <div className="h-[2px] w-10 bg-[#D4AF37] mx-auto my-4" />
                    <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-gray-700">{formData.name}</strong>. Your entry for the <strong className="text-gray-700">Meta Ray-Ban Smart Glasses</strong> has been submitted. The winner will be announced at the event.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8"
                  >
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-950 text-white text-sm font-semibold rounded-lg hover:bg-black transition-colors"
                    >
                      Visit Our Website
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
