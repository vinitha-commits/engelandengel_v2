'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Forensic Accounting',
    description: 'Detailed financial analysis to uncover the truth behind complex financial disputes.',
    href: '/services/forensic-accounting',
    icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
  },
  {
    title: 'Expert Witness Testimony',
    description: 'Credible testimony backed by rigorous financial analysis and courtroom experience.',
    href: '/services/expert-witness-testimony',
    icon: 'M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z',
  },
  {
    title: 'Joint Retention Program',
    description: 'One expert serves both parties to reduce costs and streamline litigation.',
    href: '/services/joint-retention-program',
    icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
  },
  {
    title: 'Internal Investigations',
    description: 'Thorough reviews to detect fraud, mismanagement, and financial irregularities.',
    href: '/services/internal-investigations',
    icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z',
  },
]

function ServiceCard({ service, delay }: { service: typeof services[0], delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link href={service.href} className="group block">
        <div className="bg-white rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-7 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500">
          {/* Icon */}
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-5 group-hover:bg-[#D4AF37]/20 transition-all duration-500">
            <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
            </svg>
          </div>

          {/* Title */}
          <h3 className="text-[15px] font-bold text-primary-950 uppercase tracking-wider mb-3 group-hover:text-[#D4AF37] transition-colors duration-400">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed">
            {service.description}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

export default function ServicesOverviewV2() {
  return (
    <section className="relative bg-[url(/images/Expertise.webp)] bg-cover bg-fixed bg-no-repeat bg-bottom py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#172554]/90" />
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left — Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Our <em className="text-[#d4af37] font-serif italic block">Services</em>
            </h2>
            <div className="h-[2px] w-16 bg-[#D4AF37] mb-6" />
            <p className="text-white/50 leading-relaxed">
              From strategy to testimony, we deliver industry-leading forensic accounting analysis across California and nationwide.
            </p>
          </motion.div>

          {/* Right — Staggered cards grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Row 1 — offset */}
              <div className="sm:mt-0">
                <ServiceCard service={services[0]} delay={0.1} />
              </div>
              <div className="sm:mt-12">
                <ServiceCard service={services[1]} delay={0.2} />
              </div>
              {/* Row 2 — offset opposite */}
              <div className="sm:-mt-6">
                <ServiceCard service={services[2]} delay={0.3} />
              </div>
              <div className="sm:mt-6">
                <ServiceCard service={services[3]} delay={0.4} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
