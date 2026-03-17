'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const practiceAreas = [
  {
    title: 'Economic Damages',
    description: 'Over 1,000 economic damage analyses for both plaintiffs and defendants across a wide variety of industries with MAFF credentials and over 10 research publications.',
    href: '/practice-areas/economic-damages',
  },
  {
    title: 'Fraud Investigation',
    description: 'Hundreds of fraud investigations conducted by Certified Fraud Examiners, applying cutting-edge techniques to separate fact from fiction and reconstruct truthful financial pictures.',
    href: '/practice-areas/fraud-investigation',
  },
  {
    title: 'Business Valuation',
    description: 'Over 100 business valuations with CVA and ABV credentials across a wide variety of industries, consistent with established principles and able to withstand court scrutiny.',
    href: '/practice-areas/business-valuation',
  },
  {
    title: 'Bankruptcy & Insolvency',
    description: 'Sophisticated forensic accounting support for debtors, trustees, shareholders, and creditors to reconstruct a truthful picture of relevant financial facts in bankruptcy proceedings.',
    href: '/practice-areas/bankruptcy-insolvency',
  },
  {
    title: 'IP Litigation',
    description: 'Comprehensive intellectual property damages analysis including lost profits, market share analysis, and reasonable royalty calculations, highlighted by research publications on the subject.',
    href: '/practice-areas/ip-litigation',
  },
  {
    title: 'Real Estate Litigation',
    description: 'Significant experience investigating complex real estate accounting issues, highlighted by an arbitration award in excess of $100 million in a commercial shopping center dispute.',
    href: '/practice-areas/real-estate-litigation',
  },
  {
    title: 'Construction Litigation',
    description: 'Extensive experience in forensic investigations and expert testimony for disputes involving builders, contractors, developers, subcontractors, and owners.',
    href: '/practice-areas/construction-litigation',
  },
  {
    title: 'Alter Ego',
    description: 'Extensive experience conducting forensic investigations and financial analyses on the court\'s 28 alter ego factors for both plaintiffs and defendants, with two research publications.',
    href: '/practice-areas/alter-ego',
  },
  {
    title: 'Fraudulent Transfers',
    description: 'Deep expertise in business and bankruptcy litigation with CIRA, ABV, MAFF, and CFE credentials, plus four research publications on fraudulent transfers.',
    href: '/practice-areas/fraudulent-transfers',
  },
  {
    title: 'Employment Litigation',
    description: 'Extensive expertise in analyzing and calculating economic damages in employment matters, highlighted by our research publication on the framework for employment damages.',
    href: '/practice-areas/employment-litigation',
  },
  {
    title: 'Business Interruption',
    description: 'Extensive experience evaluating business interruption claims for both plaintiffs and defendants across a wide variety of industries for litigators and insurance companies.',
    href: '/practice-areas/business-interruption',
  },
  {
    title: 'Personal Injury',
    description: 'Over 1,000 economic damage calculations and testimony in over 100 cases with MAFF credentials and over 10 research publications in personal injury and wrongful death matters.',
    href: '/practice-areas/personal-injury',
  },
  {
    title: 'Accounting Malpractice',
    description: 'Expert investigation of whether financial statements have been prepared in accordance with GAAP and GAAS, qualified to serve for both plaintiffs and defendants.',
    href: '/practice-areas/accounting-malpractice',
  },
  {
    title: 'Partnership & Shareholder Disputes',
    description: 'Involved in over 100 cases regarding corporate and partnership disputes including dissolutions under California Corporations Code Section 2000.',
    href: '/practice-areas/partnership-disputes',
  },
  {
    title: 'Trust/Probate Litigation',
    description: 'Untangling complex financial records, tracing assets, and providing forensic accounting analysis to resolve trust and estate disputes and investigate claims of mismanagement or fraud.',
    href: '/practice-areas/trust-probate-litigation',
  },
  {
    title: 'Defamation Litigation',
    description: 'Forensic accounting expertise examining whether reputational harm has translated into measurable financial losses, with analyses prepared to withstand court scrutiny.',
    href: '/practice-areas/defamation',
  },
];

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function PracticeAreasPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">

        {/* ══════════ HERO ══════════ */}
        <section className="relative bg-primary-950 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/[0.06] blur-[200px] rounded-full -translate-y-1/3 translate-x-1/4" />
            <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#1e3a8a]/10 blur-[160px] rounded-full" />
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                backgroundSize: '64px 64px',
              }}
            />
          </div>

          <div className="container-custom relative z-10 pt-36 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase">
                  Engel & Engel
                </span>
                <div className="h-px w-8 bg-[#D4AF37]" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Practice <span className="font-serif italic text-[#D4AF37] font-normal">Areas</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
                Court-ready forensic accounting expertise across 16 specialized disciplines.
              </p>
            </motion.div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />
        </section>

        {/* ══════════ 16 PRACTICE AREAS ══════════ */}
        <section className="py-24 md:py-32 bg-slate-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {practiceAreas.map((area, idx) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.04 }}
                >
                  <Link
                    href={area.href}
                    className="group relative flex flex-col h-full rounded-2xl bg-white border border-slate-200 hover:border-[#D4AF37]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                  >
                    {/* Gold left accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-l-2xl" />

                    <div className="p-6 md:p-7 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-9 h-9 rounded-lg bg-primary-950/[0.04] border border-primary-950/10 flex items-center justify-center group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-all duration-500">
                          <svg className="w-4 h-4 text-primary-950/40 group-hover:text-[#D4AF37] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-13.5 0L2.633 15.7c-.122.499.106 1.028.589 1.202a5.989 5.989 0 002.031.352 5.989 5.989 0 002.031-.352c.483-.174.711-.703.59-1.202L5.25 4.971z" />
                          </svg>
                        </div>
                        <svg
                          className="w-4 h-4 text-slate-300 group-hover:text-[#D4AF37] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </div>

                      <h3 className="text-[17px] font-bold text-primary-950 mb-3 leading-snug group-hover:text-[#0f3574] transition-colors duration-300">
                        {area.title}
                      </h3>

                      <p className="text-slate-500 text-[13px] leading-relaxed flex-grow">
                        {area.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CTA ══════════ */}
        <section className="py-24 md:py-28 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-950 rounded-2xl overflow-hidden relative"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.03] rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#D4AF37]/[0.06] rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl" />
              </div>

              <div className="relative z-10 px-8 md:px-14 lg:px-16 py-14 md:py-16">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                  <div className="max-w-lg">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 leading-snug">
                      Ready to discuss <span className="font-serif italic text-[#D4AF37] font-normal">your case?</span>
                    </h2>
                    <p className="text-slate-400 text-base leading-relaxed">
                      Schedule a confidential consultation with Los Angeles&apos; leading forensic accounting experts.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="bg-[#D4AF37] hover:bg-[#c9a430] text-primary-950 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/25 text-center text-sm whitespace-nowrap"
                    >
                      Schedule Consultation
                    </Link>
                    <a
                      href="tel:+13102772220"
                      className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-white/5 text-center text-sm whitespace-nowrap"
                    >
                      (310) 277-2220
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
