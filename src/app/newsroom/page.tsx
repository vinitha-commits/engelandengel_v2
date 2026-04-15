'use client'

import React, { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const categories = ['All', 'Press', 'Awards', 'Events', 'Media']

const newsItems = [
  {
    id: 1,
    title: 'Engel & Engel Named to Forbes 2025 Top Valuation CPAs List',
    excerpt: 'Engel & Engel LLP has been recognized by Forbes as one of the top valuation CPA firms in the United States for 2025, highlighting the firm\'s expertise in business valuation and forensic accounting.',
    date: 'March 2025',
    category: 'Awards',
    image: '/images/memberships/forbes.png',
    featured: true,
  },
  {
    id: 2,
    title: 'Brandon Engel Speaks at AICPA Forensic & Valuation Services Conference',
    excerpt: 'Brandon Engel, CPA, CFE, ABV, presented on the topic of financial forensics in complex commercial litigation at the annual AICPA conference.',
    date: 'February 2025',
    category: 'Events',
    image: '/images/memberships/aicpa.jpg',
    featured: false,
  },
  {
    id: 3,
    title: 'Engel & Engel Expands Forensic Accounting Services Nationwide',
    excerpt: 'The firm has expanded its forensic accounting and expert witness services to serve attorneys and legal teams across all 50 states, building on over 30 years of experience.',
    date: 'January 2025',
    category: 'Press',
    image: '/images/forensic-accounting.jpg',
    featured: false,
  },
  {
    id: 4,
    title: 'Jason Engel Recognized as Leading Forensic Accounting Expert',
    excerpt: 'Jason A. Engel, CPA, CFE, CVA, CIRA, MAFF has been recognized for his contributions to forensic accounting and expert testimony in high-stakes litigation matters.',
    date: 'December 2024',
    category: 'Awards',
    image: '/images/forensic-accounting-experts.png',
    featured: false,
  },
  {
    id: 5,
    title: 'Engel & Engel Partners with ACFE for Fraud Prevention Initiatives',
    excerpt: 'As certified fraud examiners, Engel & Engel has partnered with the Association of Certified Fraud Examiners to support fraud prevention education and awareness programs.',
    date: 'November 2024',
    category: 'Press',
    image: '/images/memberships/acfe.jpg',
    featured: false,
  },
  {
    id: 6,
    title: 'Firm Celebrates 30 Years of Forensic Accounting Excellence',
    excerpt: 'Engel & Engel LLP marks its 30th anniversary, reflecting on three decades of providing forensic accounting analysis and expert testimony to attorneys across California and nationwide.',
    date: 'October 2024',
    category: 'Events',
    image: '/images/city.jpg',
    featured: false,
  },
]

export default function NewsroomPage() {
  const [activeCategory, setActiveCategory] = useState('All')


  const featuredItem = newsItems.find(item => item.featured)

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-primary-950">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#3b82f6]/10 blur-[120px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        </div>
        <div className="container-custom relative z-10 w-full pb-20 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-5xl"
          >
            <p className="text-[#D4AF37] text-sm font-semibold tracking-[0.3em] uppercase mb-6">Latest Updates</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
              News<span className="font-serif italic text-[#D4AF37] font-medium">room</span>
            </h1>
            <p className="text-white/50 text-lg md:text-xl font-light mt-6 max-w-2xl">
              Press releases, awards, events, and the latest updates from Engel & Engel LLP.
            </p>
            <div className="h-[3px] w-24 bg-[#D4AF37] mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Featured Story */}
      {featuredItem && activeCategory === 'All' && (
        <section className="py-16 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <div className="h-px w-12 bg-[#D4AF37]" />
                <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs">Featured Story</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <div className="relative h-64 md:h-auto min-h-[300px] bg-gray-100">
                  <Image
                    src={featuredItem.image}
                    alt={featuredItem.title}
                    fill
                    className="object-contain p-10 md:p-16"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-[#D4AF37] text-primary-950 px-3 py-1 rounded-sm">
                      {featuredItem.category}
                    </span>
                    <span className="text-xs text-gray-400">{featuredItem.date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-950 tracking-tight mb-4 leading-tight">
                    {featuredItem.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed font-light mb-6">{featuredItem.excerpt}</p>
                  <div className="h-px bg-gray-100 mb-6" />
                  <Link href="/newsroom/jason-engel-forbes-top-cpas-valuations-2025" className="inline-flex items-center gap-2 text-[#D4AF37] font-bold text-sm hover:gap-4 transition-all duration-300">
                    Read More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-primary-950 text-white'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-primary-950 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#D4AF37] mb-6">Media Inquiries</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
              Press & Media <span className="font-serif italic text-[#D4AF37] font-medium">Contact</span>
            </h2>
            <p className="text-lg mb-10 text-white/60 font-light leading-relaxed">
              For press inquiries, interview requests, or media information, please contact our office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#D4AF37] text-primary-950 font-bold text-sm tracking-wider uppercase hover:bg-white transition-colors duration-300 rounded-lg"
              >
                Contact Us
              </Link>
              <Link
                href="/blog"
                className="px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-wider uppercase hover:bg-white/10 transition-colors duration-300 rounded-lg"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
