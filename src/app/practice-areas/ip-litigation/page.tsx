'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

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

export default function IpLitigationPage() {
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });

  const services = [
    'Infringement Damages',
    'Misappropriation of Trade Secrets',
    'Unfair Business Competition',
    'Lost Profits Analysis',
    'Market Share Analysis',
    'Mitigation Analysis',
    'Reasonable Royalty Analysis',
    'Panduit Test',
    'Analysis of Substitute Products',
    'Corrective Advertising',
    'Expert Witness Testimony',
  ];

  const publications = [
    'Trademark Infringement Damages',
    'Patent Infringement Damages',
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">

        {/* HERO */}
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
          </div>

          <div className="container-custom relative z-10 w-full pb-20 pt-40">
            <motion.div style={{ y: springY1, opacity }} className="max-w-5xl">
              <p className="text-[#D4AF37] text-sm font-semibold tracking-[0.3em] uppercase mb-6">
                Practice Area
              </p>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9]">
                Intellectual Property<br />
                <span className="font-serif italic text-[#D4AF37] font-medium">
                  (IP) Litigation
                </span>
              </h1>

              <div className="h-[3px] w-24 bg-[#D4AF37] mt-8" />
            </motion.div>
          </div>
        </section>

        {/* CONTENT WITH SIDEBAR */}
        <div className="container-custom relative py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">

            {/* SIDEBAR */}
            <aside className="hidden lg:block lg:w-72 xl:w-80 flex-shrink-0 sticky top-28">
              <nav className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="p-5 bg-primary-950">
                  <h3 className="text-sm font-bold text-white tracking-[0.2em] uppercase">
                    Practice Areas
                  </h3>
                </div>

                <div className="max-h-[70vh] overflow-y-auto py-2">
                  {practiceAreas.map((area) => {
                    const isActive = pathname === area.href;

                    return (
                      <Link
                        key={area.href}
                        href={area.href}
                        className={`block px-5 py-3 text-[0.85rem] font-medium border-l-[3px] ${
                          isActive
                            ? 'bg-primary-950/5 text-primary-950 border-l-[#D4AF37] font-semibold'
                            : 'text-gray-800 border-l-transparent hover:bg-slate-50 hover:text-primary-950'
                        }`}
                      >
                        {area.title}
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </aside>

            {/* MAIN CONTENT */}
            <div className="flex-1 min-w-0">
  <section className="">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative">
                    <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/40 to-transparent rounded-full hidden lg:block" />
                   <p>
                  Intellectual property litigation often demands the expertise
                  of a forensic accountant in evaluating infringement damages.
                  Engel & Engel has extensive experience conducting forensic
                  investigations and providing expert testimony in connection
                  with intellectual property matters for both plaintiffs and
                  defendants.
                </p>

                <p className="mt-4">
                  When patents, copyrights, trademarks, trade secrets, and
                  unfair business practices are litigated, Engel & Engel works
                  with counsel to prepare sound analyses consistent with
                  financial principles articulated by the courts.
                </p>
                  </div>
                </motion.div>
              </section>

            

              {/* SERVICES */}
              <section className="py-10 my-10 border-t border-b border-slate-200">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-950 mb-6">
                  How Engel & Engel Helps IP Litigation Attorneys
                </h2>
                  <div className="h-[3px] w-16 bg-primary-950 mb-4" />

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {services.map((item, i) => (
                    <div
                      key={i}
                      className="p-5 bg-white rounded-2xl border border-slate-200 hover:shadow-lg"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              {/* PUBLICATIONS */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-primary-950 mb-6">
                  Research Publications
                </h2>
                  <div className="h-[3px] w-16 bg-primary-950 mb-4" />

                <div className="space-y-3">
                  {publications.map((item, i) => (
                    <a
                      key={i}
                      href="/publications/ip-litigation"
                      className="flex gap-5 p-5 rounded-xl bg-white border hover:shadow-md"
                    >
                      <span className="w-8 h-8 rounded-lg bg-primary-950/5 text-primary-950 flex items-center justify-center text-sm font-bold">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      <span className="font-medium text-gray-800">{item}</span>
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* CONTACT CTA */}
        <section className="relative py-16 md:py-24 bg-primary-950 overflow-hidden">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">

              <p className="text-white/50 text-base md:text-lg mb-14">
                For additional information about Engel & Engel&apos;s
                Forensic Accounting Services or a consultation, please contact
                us.
              </p>

              <div className="bg-white/[0.04] backdrop-blur-md rounded-3xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-6">

                  <Image
                    width={100}
                    height={100}
                    src="/images/team/brandon-engel.jpg"
                    alt="Brandon J. Engel"
                    className="h-20 w-20 object-cover rounded-xl"
                  />

                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Brandon J. Engel
                    </h3>
                    <p className="text-white/40 text-sm uppercase">
                      CPA, CFE, ABV
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href="mailto:brandon@engelandengel.com"
                      className="text-white"
                    >
                      brandon@engelandengel.com
                    </a>

                    <a href="tel:310-277-2220" className="text-white">
                      310-277-2220
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}