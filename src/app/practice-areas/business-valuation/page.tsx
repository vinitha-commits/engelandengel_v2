'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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

export default function BusinessValuationPage() {
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });

  const services = [
    'Minority Shareholder Valuation',
    'Corporate Mergers & Acquisitions',
    'Corporate and Partnership Dissolutions',
    'Corporation Code 2000 Valuation',
    'Net Worth Valuation',
    'Shareholder & Partnership Disputes',
    'Economic Damage Analysis',
    'Fair Value Solvency Analysis',
    'Estate Valuation',
    'Buy and Sell Agreements',
    'Buyout Agreements',
    'Expert Witness Testimony',
  ];

  const publications = [
    'Business Valuation Under California Corporate Code Section 2000',
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

            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />

            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

          </div>

          <div className="container-custom relative z-10 w-full pb-20 pt-40">

            <motion.div style={{ y: springY1, opacity }} className="max-w-5xl">

              <p className="text-[#D4AF37] text-sm font-semibold tracking-[0.3em] uppercase mb-6">
                Practice Area
              </p>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9]">
                Business <br />
                <span className="font-serif italic text-[#D4AF37] font-medium">
                  Valuation
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
                            : 'text-gray-800 border-l-transparent hover:bg-slate-50 hover:border-l-primary-950/30'
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

              {/* OVERVIEW */}
              <section>

                <div className="relative">

                  <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/40 to-transparent rounded-full hidden lg:block" />

                  <p>
                    Engel & Engel possesses extensive experience and qualifications to
                    provide business valuation services and serve as your valuation
                    expert. Our qualifications include two business valuation
                    credentials, Certified Valuation Analyst (CVA) and Accreditation in
                    Business Valuation (ABV). Our experience includes over 100 business
                    valuations in a wide variety of industries. Overall, Engel & Engel
                    has the credentials and experience to prepare business valuations
                    that are consistent with established valuation principles and are
                    able to withstand the scrutiny of the court.
                  </p>

                </div>

              </section>


              {/* SERVICES */}
              <section className="py-10 my-10 border-t border-b border-slate-200">

                <h2 className="text-2xl md:text-3xl font-bold text-primary-950 mb-4">
                  Business Valuation Forensic Accounting Services
                </h2>

                <div className="h-[3px] w-16 bg-primary-950 mb-4" />

                <p className="mb-10">
                  When the stakes are high, Engel & Engel can serve as your expert in connection with the following:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

                  {services.map((item, i) => (

                    <div
                      key={i}
                      className="group relative p-5 bg-white rounded-2xl border border-slate-200 hover:border-primary-950/30 hover:shadow-lg transition-all flex justify-center flex-col"
                    >

                      <div className="absolute top-1/2 -translate-y-1/2 left-5 w-2 h-2 rounded-full bg-[#D4AF37]" />

                      <span className="block pl-5 text-[0.95rem] font-medium leading-snug">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </section>


              {/* PUBLICATIONS */}
              <section>

                <h2 className="text-2xl md:text-3xl font-bold text-primary-950 mb-4">
                  Research Publications
                </h2>

                <div className="h-[3px] w-16 bg-primary-950 mb-6" />

                <div className="space-y-3">

                  {publications.map((item, i) => (

                    <div
                      key={i}
                      className="flex gap-5 p-5 rounded-xl bg-white border hover:shadow-md"
                    >

                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-950/5 text-primary-950 flex items-center justify-center text-sm font-bold">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      <span className="font-medium text-gray-800 leading-snug">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </section>

            </div>
          </div>
        </div>


        {/* CONTACT CTA */}
        <section className="relative py-20 bg-primary-950">

          <div className="container-custom text-center">

            <p className="text-white/60 mb-10">
              For additional information about Engel & Engel's Forensic Accounting Services or a consultation, please contact us.
            </p>

            <div className="flex justify-center">

              <div className="flex items-center gap-6 bg-white/5 p-6 rounded-2xl">

                <Image
                  src="/images/team/brandon-engel.jpg"
                  width={80}
                  height={80}
                  alt="Brandon Engel"
                  className="rounded-xl"
                />

                <div className="text-left">

                  <h3 className="text-white text-xl font-bold">
                    Brandon J. Engel
                  </h3>

                  <p className="text-white/50 text-sm">
                    CPA, CFE, ABV
                  </p>

                  <p className="text-white text-sm mt-2">
                    brandon@engelandengel.com
                  </p>

                  <p className="text-white text-sm">
                    310-277-2220
                  </p>

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