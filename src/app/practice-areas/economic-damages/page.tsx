'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image'


const practiceAreas = [
  { title: 'Economic Damages', href: '/practice-areas/economic-damages' },
  { title: 'Fraud Investigation', href: '/practice-areas/fraud-investigation' },
  { title: 'Business Valuation', href: '/practice-areas/business-valuation' },
  { title: 'Bankruptcy & Insolvency', href: '/practice-areas/bankruptcy-insolvency' },
  { title: 'IP Litigation', href: '/practice-areas/ip-litigation' },
  { title: 'Real Estate Litigation', href: '/practice-areas/real-estate-litigation' },
  { title: 'Construction Litigation', href: '/practice-areas/construction-litigation' },
  { title: 'Alter Ego', href: '/practice-areas/alter-ego' },
  { title: 'Fraudulent Transfers', href: '/practice-areas/fraudulent-transfers' },
  { title: 'Employment Litigation', href: '/practice-areas/employment-litigation' },
  { title: 'Business Interruption', href: '/practice-areas/business-interruption' },
  { title: 'Personal Injury', href: '/practice-areas/personal-injury' },
  { title: 'Accounting Malpractice', href: '/practice-areas/accounting-malpractice' },
  { title: 'Partnership & Shareholder Disputes', href: '/practice-areas/partnership-disputes' },
  { title: 'Trust/Probate Litigation', href: '/practice-areas/trust-probate-litigation' },
  { title: 'Defamation Litigation', href: '/practice-areas/defamation' },
];

export default function EconomicDamagesPage() {
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });

  const services = [
    'Contract Damages',
    'Lost Profits',
    'Fraud Damages',
    'Lost Goodwill',
    'Compensatory Damages',
    'Out of Pocket Damages',
    'Mitigation Analysis',
    'Rescission Damages',
    'Reliance Damages',
    'Benefit of the Bargain Damages',
    'IP Infringement Damages',
    'Construction Damages and Delay Claims',
    'Business Interruption Damages',
    'Unestablished Business Damages',
    'Reputational Damages',
    'Employment Damages',
  ];

  const publications = [
    'Framework for the Calculation of Infringement Damages Part I: Trademark Infringement Damages Under the Lanham Act',
    'Framework for the Calculation of Infringement Damages Part II: Patent Infringement Damages',
    'Framework for the Calculation of Damages: Projected Lost Earnings',
    'Financial Principles for Calculating Lost Profits',
    'The Element of Certainty in Calculating Lost Profits',
    'Prospective Lost Profits',
    'Calculating Lost Profits for Unestablished Businesses',
    'Mitigation of Damages',
    'Discounting Future Lost Profits',
    'Admissibility of Expert Testimony: "The Element of Reliability"',
    'The Business Records Exception to the Hearsay Rule: "The Admissibility of Financial Records as Evidence in Federal and State Court"',
  ];

  return (
    <>
      <Header />
      <main className=" min-h-screen">

        {/* ══════════ HERO ══════════ */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-primary-950">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <motion.div
              style={{ y: y2, scale }}
              className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[150px] rounded-full"
            />
            <motion.div
              style={{ y: y1 }}
              className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#3b82f6]/10 blur-[120px] rounded-full"
            />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
          </div>

          <div className="container-custom relative z-10 w-full pb-20 pt-40">
            <motion.div
              style={{ y: springY1, opacity }}
              className="max-w-5xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <p className="text-[#D4AF37] text-sm font-semibold tracking-[0.3em] uppercase mb-6">Practice Area</p>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9]">
                  Economic<br />
                  <span className="font-serif italic text-[#D4AF37] font-medium">Damages</span>
                </h1>
                <div className="h-[3px] w-24 bg-[#D4AF37] mt-8" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════ CONTENT WITH SIDEBAR ══════════ */}
        <div className="container-custom relative py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">

            {/* ── Sticky Sidebar ── */}
            <aside className="hidden lg:block lg:w-72 xl:w-80 flex-shrink-0 z-20 sticky top-28">
              <div className="">
                <nav className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                  <div className="p-5 bg-primary-950">
                    <h3 className="text-sm font-bold text-white tracking-[0.2em] uppercase">Practice Areas</h3>
                  </div>
                  <div className="max-h-[70vh] overflow-y-auto py-2 custom-scrollbar">
                    {practiceAreas.map((area) => {
                      const isActive = pathname === area.href;
                      return (
                        <Link
                          key={area.href}
                          href={area.href}
                          className={`block px-5 py-3 text-[0.85rem] font-medium transition-all duration-200 border-l-[3px] ${
                            isActive
                              ? 'bg-primary-950/5 text-primary-950 border-l-[#D4AF37] font-semibold'
                              : 'text-gray-800 border-l-transparent hover:bg-slate-50 hover:text-primary-950 hover:border-l-primary-950/30'
                          }`}
                        >
                          {area.title}
                        </Link>
                      );
                    })}
                  </div>
                </nav>
              </div>
            </aside>

            {/* ── Main Content ── */}
            <div className="flex-1 min-w-0">

              {/* ══════════ OVERVIEW ══════════ */}
              <section className="">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative">
                    <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/40 to-transparent rounded-full hidden lg:block" />
                    <p className="">
                      Business litigation often requires a forensic analysis of economic damages. Engel &amp; Engel has conducted over 1,000 economic damage analyses for both plaintiffs and defendants in a wide variety of industries. Our economic damage qualifications are highlighted with a credentialed Master Analyst in Financial Forensics (MAFF) and over 10 research publications in connection with economic damages. Overall, Engel &amp; Engel has the credentials and experience to prepare damage models that are consistent with established financial principles and are able to withstand the scrutiny of the court.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* ══════════ SERVICES ══════════ */}
              <section className="py-10 my-10  border-t border-b border-slate-200">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-950 leading-tight mb-4">
                    How Engel &amp; Engel Helps Business Litigators With Economic Damage Analyses
                  </h2>
                  <div className="h-[3px] w-16 bg-primary-950 mb-4" />
                  <p className="mb-10">
                    When the stakes are high, Engel &amp; Engel can serve as your expert in connection with the following:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {services.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.03 }}
                        className="group relative p-5 bg-white rounded-2xl border border-slate-200 hover:border-primary-950/30 hover:shadow-lg transition-all duration-300 flex justify-center flex-col"
                      >
                        <div className="absolute top-1/2 -translate-y-1/2 left-5 w-2 h-2 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-transform" />
                        <span className="block pl-5 text-[0.95rem] font-medium  leading-snug group-hover:text-primary-950 transition-colors">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* ══════════ PUBLICATIONS ══════════ */}
              <section className="border-slate-200">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-950 tracking-tight mb-4">
                    Research Publications
                  </h2>
                  <div className="h-[3px] w-16 bg-primary-950 mb-6" />
                  <p className="mb-10">
                    Engel &amp; Engel has published various research publications in connection with the following topics relating to the Framework for the Calculation of Lost Profits:
                  </p>
                  <div className="space-y-3">
                    {publications.map((item, i) => (
                      <motion.a
                      href="/publications/economic-damages"
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.04 }}
                        className="group flex gap-5 p-5 rounded-xl bg-white border border-transparent hover:border-primary-950/20 hover:shadow-md transition-all duration-300 items-center"
                      >
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-950/5 text-primary-950 flex items-center justify-center text-sm font-bold group-hover:bg-primary-950 group-hover:text-white transition-all duration-300">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="font-medium text-gray-800 leading-snug group-hover:text-primary-950 transition-colors">
                          {item}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </section>
            </div>
          </div>
        </div>

        {/* ══════════ MOBILE PRACTICE AREAS ══════════ */}
        <section className="lg:hidden py-12 bg-white border-t border-slate-200">
          <div className="container-custom">
            <h3 className="text-lg font-bold text-primary-950 mb-6 tracking-tight">Other Practice Areas</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {practiceAreas.filter((area) => area.href !== pathname).map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="block p-4 bg-slate-50 rounded-xl text-[0.8rem] font-medium text-slate-600 hover:bg-primary-950/5 hover:text-primary-950 transition-all duration-200 border border-slate-100 hover:border-primary-950/20"
                >
                  {area.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CONTACT CTA ══════════ */}
        <section className="relative py-16 md:py-24 bg-primary-950 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/[0.03] rounded-full blur-[100px]" />
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* <span className="inline-block text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-6">Get in Touch</span> */}
              {/* <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5">
                Ready to Discuss<br />
                <span className="font-serif italic text-[#D4AF37] font-medium">Your Case?</span>
              </h2> */}
              <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
                For additional information about Engel &amp; Engel&apos;s Forensic Accounting Services or a consultation, please contact us.
              </p>

              {/* Contact card */}
              <div className="relative max-w-3xl mx-auto">
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-[#D4AF37]/30 via-white/10 to-transparent" />
                <div className="relative bg-white/[0.04] backdrop-blur-md rounded-3xl p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Avatar / Initials */}
                    <div className="flex-shrink-0">
                      <div className=" rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#B8962E] flex items-center justify-center shadow-lg shadow-[#D4AF37]/20 overflow-hidden">
                        <Image width={100} height={100} src='/images/team/brandon-engel.jpg' alt='Brandon J. Engel' className="h-20 w-20  object-cover object-top"/>
                      </div>
                    </div>

                    {/* Name & credentials */}
                    <div className="text-center md:text-left flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Brandon J. Engel</h3>
                      <p className="text-white/40 text-sm font-medium tracking-wider uppercase mt-1">CPA, CFE, ABV</p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-white/15 to-transparent" />

                    {/* Contact links */}
                    <div className="flex flex-col gap-4">
                      <a href="mailto:brandon@engelandengel.com" className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300">
                          <svg className="w-4 h-4 text-[#D4AF37] group-hover:text-primary-950 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">brandon@engelandengel.com</span>
                      </a>
                      <a href="tel:310-277-2220" className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300">
                          <svg className="w-4 h-4 text-[#D4AF37] group-hover:text-primary-950 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">310-277-2220</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        </section>

        <Footer />
      </main>
    </>
  );
}
