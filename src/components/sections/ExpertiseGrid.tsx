"use client";

import React from "react";
import Link from 'next/link'
import { motion } from 'framer-motion'

const expertiseAreas = [
    { id: '01', title: 'Economic Damages', href: '/practice-areas/economic-damages' },
    { id: '02', title: 'Fraud Investigation', href: '/practice-areas/fraud-investigation' },
    { id: '03', title: 'Business Valuation', href: '/practice-areas/business-valuation' },
    { id: '04', title: 'Bankruptcy & Insolvency', href: '/practice-areas/bankruptcy-insolvency' },
    { id: '05', title: 'Intellectual Property (IP) Litigation', href: '/practice-areas/ip-litigation' },
    { id: '06', title: 'Real Estate Litigation', href: '/practice-areas/real-estate-litigation' },
    { id: '07', title: 'Construction Litigation', href: '/practice-areas/construction-litigation' },
    { id: '08', title: 'Alter Ego', href: '/practice-areas/alter-ego' },
    { id: '09', title: 'Fraudulent Transfers', href: '/practice-areas/fraudulent-transfers' },
    { id: '10', title: 'Employment Litigation', href: '/practice-areas/employment-litigation' },
    { id: '11', title: 'Business Interruption', href: '/practice-areas/business-interruption' },
    { id: '12', title: 'Personal Injury', href: '/practice-areas/personal-injury' },
    { id: '13', title: 'Accounting Malpractice', href: '/practice-areas/accounting-malpractice' },
    { id: '14', title: 'Partnership / Shareholder Disputes', href: '/practice-areas/partnership-disputes' },
    { id: '15', title: 'Trust/Probate Litigation', href: '/practice-areas/trust-probate-litigation' },
    { id: '16', title: 'Defamation', href: '/practice-areas/defamation' }
]

const credentials = ["CPA", "CFE", "CIRA", "CVA", "MAFF", "ABV"];

export default function ExpertiseGrid() {
  return (
    <section className="relative bg-[url(/images/Expertise.webp)] flex justify-center bg-cover bg-fixed bg-no-repeat min-h-screen bg-bottom py-16 md:py-24">

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container-custom w-full relative z-10">

        {/* HERO */}
        <div className="mb-12 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.02em] text-white text-center"
          >
            <span className="">Our Areas </span>
            of <em className="text-[#d4af37] font-serif italic">Expertise</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1px]">
          {expertiseAreas.map((area, index) => (
              <Link key={index} href={area.href} className="group relative">
                  <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.04, duration: 0.5, ease: "easeOut" }}
                      className="relative h-44 p-8 border border-white/[0.08] bg-white/[0.8] backdrop-blur-md
                        hover:bg-primary-950 hover:border-white/[0.15] hover:backdrop-blur-xl
                        transition-all duration-500 ease-out flex flex-col overflow-hidden justify-center
                        hover:shadow-[0_8px_32px_rgba(212,175,55,0.1)]"
                  >
                      {/* Numbered accent */}
                      <span className="absolute top-4 right-5 text-xs font-mono text-white/0 group-hover:text-[#d4af37]/50 transition-colors duration-500">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.5 59.7" width={50} height={50}>
                            <path fill="currentColor" d="M8.4,10.1c1.8,6.1,1.3,12.6,1.4,18.9c-0.1,6.9,0.3,13.9-1.4,20.7c6.4,0,12.7,0,19.1,0
                              c0.9-2.6,2-5.2,2.9-7.8c-1.1,0.6-2.2,1.2-3.4,1.6c-3.8,1.4-7.9,1.9-12,1.7c0-4.5,0-9.1,0-13.6c2.9,0.1,6.2,0.3,8.5,2.2
                              c1-2.1,2.2-4.1,3.2-6.3c-3.9-0.1-7.8,0-11.7,0c-0.1-4.5,0-8.9,0-13.4c3.5,0,7.2,0.5,10.3,2.4c1-2.1,2-4.3,2.9-6.5
                              C21.6,10.1,15,10.1,8.4,10.1z"/>

                            <path fill="currentColor" d="M39.3,10.2c0.9,2.2,2,4.3,2.9,6.5c3-2,6.8-2.5,10.3-2.5c0,4.5,0,8.9,0,13.4c-3.9,0-7.9,0-11.8,0
                              c1,2.1,2.2,4.1,3.2,6.3c2.4-1.9,5.6-2.2,8.6-2.2c0,4.5,0,9.1,0,13.6c-5.3,0.3-10.9-0.5-15.5-3.4c0.9,2.5,1.9,5.1,2.8,7.6
                              c0.1,0.4,0.6,0.2,0.9,0.3c6.1,0,12.2,0,18.3,0c-1.8-6.8-1.3-13.9-1.4-20.9c0.1-6.2-0.4-12.6,1.4-18.6
                              C52.4,10.1,45.9,10.1,39.3,10.2z"/>

                            <path fill="currentColor" fill-rule="evenodd" d="M30.5,28.3c0,1,0.6,1.9,1.2,2.6c-0.7,0.5-1.5,0.9-2,1.7c-0.5,0.8-0.8,1.9-0.6,2.9
                              c0.2,1,1.2,1.6,2.1,1.8c1.7,0.2,3.3-0.2,4.8-1c0.3,0.3,0.6,0.7,0.8,1c1.1,0,2.2,0,3.3,0c0-0.1,0-0.4,0-0.5
                              c-0.3-0.1-0.6-0.1-0.8-0.2c-0.7-0.7-1.2-1.4-1.7-2.2c0.7-0.9,1.4-1.7,2.2-2.6c-0.3-0.4-0.7-0.7-1-1.1c-0.7,1-1.3,2-1.9,3.1
                              c-1-1-1.7-2.1-2.6-3.2c0.7-0.4,1.7-0.6,1.9-1.6c0.1-0.8,0.2-1.8-0.2-2.5c-0.8-0.7-2-0.7-3-0.7C31.8,25.8,30.5,26.9,30.5,28.3z
                              M33.4,26.7c0.9-0.5,1.9,0.4,1.8,1.3c0.2,1-1,2-1.8,1.4C32.9,28.7,32.8,27.4,33.4,26.7z
                              M32.5,31.8c1,1.2,2.1,2.4,3,3.6c-0.9,0.5-2,0.7-3,0.5c-1-0.3-1.4-1.5-1.1-2.4C31.5,32.8,32,32.3,32.5,31.8z"/>
                          </svg>
                      </span>

                      {/* Corner accent on hover */}
                      <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent group-hover:w-6 group-hover:h-6 group-hover:border-[#d4af37]/60 transition-all duration-500 ease-out" />

                      <div className="relative z-10">
                          <h3 className="text-sm text-center md:text-base font-semibold tracking-[0.15em] text-primary-950 group-hover:text-white transition-all duration-500 leading-tight uppercase" style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.4), 0px 6px 9px rgba(0,0,0,0.1), 0px -2px 8px rgba(0,0,0,0.1)" }}>
                              {area.title}
                          </h3>
                      </div>

                      {/* Arrow indicator */}
                      <div className="absolute bottom-4 right-5 opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                          <svg className="w-4 h-4 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                      </div>

                      {/* Bottom gold line */}
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#d4af37] to-[#d4af37]/40 group-hover:w-full transition-all duration-700 ease-out" />
                  </motion.div>
              </Link>
          ))}
        </div>

      </div>
    </section>
  );
}