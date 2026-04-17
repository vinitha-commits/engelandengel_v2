'use client'

import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function ForbesTopCPAsArticleV2() {
  return (
    <>
      <main>
        <Header />

        {/* Hero Banner */}
        <section className="relative overflow-hidden bg-primary-950">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
          </div>

          <div className="relative z-10">
            <div className="container mx-auto px-6 pt-40 pb-16">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                  {/* Left - Text Content */}
                  <div className="lg:col-span-3">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="mb-8">
                      <ol className="flex items-center space-x-2 text-sm text-[#D4AF37]/80">
                        <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
                        <li className="text-white/40">/</li>
                        <li><Link href="/newsroom" className="hover:text-[#D4AF37] transition-colors">Newsroom</Link></li>
                        <li className="text-white/40">/</li>
                        <li className="text-white font-medium">Awards</li>
                      </ol>
                    </nav>

                    <div className="mb-4">
                      <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Awards
                      </span>
                      <span className="ml-3 text-white/60 text-sm">April 2025</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                      Jason A. Engel Named to Forbes Top CPAs for Valuations
                    </h1>
                    <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl">
                      Partner at Engel & Engel LLP recognized among the nation&apos;s leading valuation CPA professionals by Forbes for 2025.
                    </p>
                    <div className="flex flex-wrap items-center gap-6 text-white/90">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                          EE
                        </div>
                        <div>
                          <div className="font-medium text-white">Engel & Engel LLP</div>
                          <div className="text-sm text-white/70">Press Release</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right - Forbes Logo */}
                  <div className="lg:col-span-2 flex items-center justify-center">
                    <div className="relative w-full h-[300px] lg:h-[400px] p-6">
                      <Image
                        src="/images/memberships/forbes.png"
                        alt="Forbes Top CPAs for Valuations 2025"
                        fill
                        className="object-contain p-8"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['Forbes', 'Business Valuation', 'CPA', 'Awards', 'Los Angeles'].map((tag) => (
                  <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-ul:my-4 prose-ol:my-4 prose-li:my-1">
                <p>
                  <strong>Los Angeles, CA</strong> — Engel & Engel LLP is proud to announce that <strong>Jason A. Engel, CPA</strong>, Partner at the firm, has been named to the prestigious <strong>Forbes 2025 Top CPAs for Valuations</strong> list. This national recognition honors the leading valuation CPA professionals across the United States, and places Jason among an elite group of experts recognized by one of the world&apos;s most respected business publications.
                </p>

                <h2>About the Forbes Top CPAs for Valuations List</h2>
                <p>
                  The Forbes Top CPAs for Valuations list is an annual ranking that identifies the most trusted and accomplished CPA professionals who specialize in business valuations nationwide. Forbes developed this list through an extensive research process in partnership with industry experts, evaluating professionals based on their credentials, depth of experience, areas of specialization, industry reputation, and demonstrated track record of delivering expert valuation services in complex financial and legal matters.
                </p>
                <p>
                  Selection to this list is a significant achievement, as it represents recognition at the highest national level for excellence in the field of business valuation.
                </p>

                <h2>Jason A. Engel&apos;s Profile on the Forbes List</h2>
                <p>
                  Jason A. Engel is listed on the Forbes Top CPAs for Valuations as:
                </p>
                <ul>
                  <li><strong>Name:</strong> Jason A. Engel</li>
                  <li><strong>Title:</strong> Partner, Engel & Engel</li>
                  <li><strong>Designation:</strong> CPA</li>
                  <li><strong>Location:</strong> Los Angeles, California</li>
                </ul>

                <h2>A Distinguished Career in Valuation and Forensic Accounting</h2>
                <p>
                  Jason A. Engel brings decades of specialized experience in business valuation, forensic accounting, and financial analysis to the firm. His professional credentials include Certified Public Accountant (CPA), Certified Fraud Examiner (CFE), Certified Valuation Analyst (CVA), Certified Insolvency & Restructuring Advisor (CIRA), and Master Analyst in Financial Forensics (MAFF) — reflecting one of the most comprehensive sets of professional certifications in the industry.
                </p>
                <p>
                  His expertise spans a broad range of valuation and forensic accounting engagements, including:
                </p>
                <ul>
                  <li>Business valuations for litigation, mergers and acquisitions, and corporate transactions</li>
                  <li>Marital dissolution and family law financial analysis</li>
                  <li>Estate and gift tax valuation for tax planning and compliance</li>
                  <li>Shareholder and partnership dispute valuations</li>
                  <li>Economic damages calculations in commercial litigation</li>
                  <li>Fraud investigations and forensic accounting analysis</li>
                  <li>Expert witness testimony in state and federal courts</li>
                </ul>
                <p>
                  Jason&apos;s rigorous analytical methodology and ability to communicate complex financial concepts clearly to judges, juries, and attorneys have made him a trusted expert witness and advisor in high-stakes litigation matters throughout California and nationwide.
                </p>

                <h2>Engel & Engel&apos;s Commitment to Excellence</h2>
                <p>
                  This Forbes recognition reflects the firm&apos;s long-standing commitment to delivering the highest quality forensic accounting and valuation services. Founded over 30 years ago, Engel & Engel LLP has built its reputation on providing rigorous, independent, and objective financial analysis that attorneys and clients rely on in their most critical cases.
                </p>
                <p>
                  &ldquo;Being recognized by Forbes as one of the top CPAs for valuations in the country is a tremendous honor,&rdquo; said Jason A. Engel. &ldquo;This recognition is a testament to the standards we uphold at Engel & Engel and our unwavering commitment to providing thorough, expert-level valuation and forensic accounting services to our clients.&rdquo;
                </p>

                <h2>About Engel & Engel LLP</h2>
                <p>
                  Engel & Engel LLP is a Los Angeles-based forensic accounting and business valuation firm serving attorneys, law firms, and businesses across California and the United States. The firm specializes in forensic accounting analysis, expert witness testimony, business valuations, fraud examinations, and financial investigations for complex litigation matters including commercial disputes, marital dissolution, shareholder disputes, construction litigation, real estate litigation, intellectual property cases, and employment matters.
                </p>
                <p>
                  For more information about Engel & Engel LLP and their forensic accounting and valuation services, visit <Link href="/" className="text-blue-600 hover:underline">engelandengel.com</Link> or contact the firm directly.
                </p>

                <hr />

                <p className="text-sm text-gray-400 italic">
                  The Forbes Top CPAs for Valuations list can be viewed at{' '}
                  <a href="https://www.forbes.com/lists/top-cpas-for-valuations/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    forbes.com/lists/top-cpas-for-valuations
                  </a>. Jason A. Engel&apos;s profile on the Forbes list can be viewed at{' '}
                  <a href="https://www.forbes.com/profile/jason-a-engel/?list=top-cpas-for-valuations" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    forbes.com/profile/jason-a-engel
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-900 text-white p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4">Need Expert Valuation Services?</h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Contact Engel & Engel LLP for professional business valuation, forensic accounting,
                  and expert witness testimony services. Over 30+ years of experience with hundreds of successful cases.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-block bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                    Get Free Consultation
                  </Link>
                  <Link href="/newsroom" className="inline-block border border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors">
                    Back to Newsroom
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-blue-800">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Call:</span>
                      <span>(310) 277-2220</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Email:</span>
                      <span>info@engelandengel.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
