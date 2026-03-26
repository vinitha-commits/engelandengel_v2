'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    id: '01',
    title: 'Forensic Accounting',
    description: 'Detailed financial analysis to uncover the truth behind complex financial disputes.',
    href: '/services/forensic-accounting',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'Expert Witness Testimony',
    description: 'Credible testimony backed by rigorous financial analysis and courtroom experience.',
    href: '/services/expert-witness-testimony',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Joint Retention Program',
    description: 'One expert serves both parties to reduce costs and streamline litigation.',
    href: '/services/joint-retention-program',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'Internal Investigations',
    description: 'Thorough reviews to detect fraud, mismanagement, and financial irregularities.',
    href: '/services/internal-investigations',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
]

export default function ServicesOverview() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-primary-950">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-100" style={{
        backgroundImage: `linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
      }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)',
      }} />

      <div className="relative z-10 container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex md:items-center flex-col md:flex-row gap-4 md:gap-8 mb-14 lg:mb-20"
        >
          <div className="flex-none">
            <h2 className="text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9] tracking-tight">
              Our <em className="text-[#d4af37] font-serif italic">Services</em>
            </h2>
          </div>
          <div className="flex-1 h-px w-full" style={{
            background: 'linear-gradient(90deg, rgba(212,175,55,0.5), transparent)',
          }} />
        </motion.div>

        {/* Cards - taller with icons, descriptions, and hover animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={service.href}
                className="service-card group relative block rounded-2xl bg-white/[0.04] border border-white/[0.08] p-8 h-full min-h-[260px] transition-all duration-500 overflow-hidden hover:bg-white/[0.08] hover:border-[#d4af37]/30 hover:-translate-y-1"
              >
                {/* Animated gold top border */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                {/* Bottom glow on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                  background: 'radial-gradient(ellipse, rgba(212,175,55,0.1) 0%, transparent 70%)',
                }} />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-[#d4af37]/70 mb-6 group-hover:border-[#d4af37]/30 group-hover:text-[#d4af37] group-hover:bg-[#d4af37]/5 transition-all duration-400">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#d4af37] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/35 group-hover:text-white/50 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                  <svg className="w-3.5 h-3.5 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
