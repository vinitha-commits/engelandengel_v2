import React from 'react'
import Image from 'next/image'

export default function IntroSection() {
  return (
    <section className="relative py-16 md:py-24 bg-white
">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 relative group">
            <img className='mt-[-120px] md:mt-[-220px]' src="/images/forensic-accounting-experts.png" alt="" />
            <div className="relative z-10 bg-primary-950 text-white p-10 lg:ms-auto mt-[-100px]  rounded-sm shadow-[20px_20px_60px_-15px_rgba(23,37,84,0.3)] w-fit ">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <svg className="w-12 h-12 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="block text-xs font-bold tracking-[0.6em] uppercase text-[#D4AF37] mb-4">Est.</span>
              <div className="flex items-baseline space-x-2">
                <span className="block text-4xl md:text-7xl font-serif italic mb-6 leading-none">1994</span>
              </div>
              <div className="h-[2px] w-24 bg-gradient-to-r from-[#D4AF37] to-transparent mb-8" />
              <p className="text-primary-100 text-lg leading-relaxed font-light max-w-xs transition-colors group-hover:text-white">
                Over 30 years of providing forensic accounting analysis and expert testimony to attorneys across California and the United States.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-950 mb-4 lg:leading-[1.05] ">
              Engel & Engel <br />
              <span>Los Angeles Forensic Accounting Experts</span>
            </h2>
            <p className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-base md:text-xl mb-5">From Strategy to Testimony</p>
            <div className="flex flex-col gap-4">
              <p>
                Established in Los Angeles in 1994, <strong>Engel & Engel LLP</strong> provides forensic accounting and advisory services in complex business litigation matters across California and nationwide.
              </p>
              <p>
                We provide litigation support for plaintiffs and defendants in matters involving fraud investigations, economic damages, business valuation, bankruptcy and insolvency, and other financial matters.
              </p>
              <p>
                Engel & Engel delivers industry-leading forensic accounting analysis and clear, defensible expert testimony in high-stakes matters nationwide.
              </p>
              <p>
                Engel & Engel's forensic analysis has supported billions of dollars in court awards and defenses, and its professionals have been recognized nationally, including Forbes' 2025 Top Valuation CPAs.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Industry Credentials Logo Bar - Updated with User-Provided Source URLs */}
      <div className="mt-8 pt-10">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          <div className="relative h-16 md:h-20 w-48 opacity-80 hover:grayscale transition-all duration-500">
            <Image src="https://engelandengel.com/wp-content/uploads/elementor/thumbs/aicpa-q9lpfz4lfpwk1yewi9wruisxrxfrhika047rthpf6y.jpg" alt="AICPA" fill className="object-contain" />
          </div>
          <div className="relative h-24 md:h-32 w-40 opacity-80 hover:grayscale transition-all duration-500">
            <Image src="https://engelandengel.com/wp-content/uploads/2023/07/calpa.jpg" alt="CalCPA" fill className="object-contain" />
          </div>
          <div className="relative h-24 md:h-32 w-40 opacity-80 hover:grayscale transition-all duration-500">
            <Image src="https://engelandengel.com/wp-content/uploads/2023/07/acfe.jpg" alt="ACFE" fill className="object-contain" />
          </div>
          <div className="relative h-24 md:h-32 w-40 opacity-80 hover:grayscale transition-all duration-500">
            <Image src="https://engelandengel.com/wp-content/uploads/2023/07/aira.jpg" alt="AIRA" fill className="object-contain" />
          </div>
          <div className="relative h-24 md:h-32 w-48 opacity-80 hover:grayscale transition-all duration-500">
            <Image src="https://engelandengel.com/wp-content/uploads/elementor/thumbs/nacva-q9lpiejl3b881ovxbtp2seqt0rgwdd7bc4vxg83t4a.jpg" alt="NACVA" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
