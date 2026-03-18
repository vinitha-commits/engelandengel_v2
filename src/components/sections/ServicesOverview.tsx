'use client'

import React from 'react'

const services = [
  {
    id: "01",
    tag: "",
    icon: "⬡",
    title: "Forensic Accounting",
    desc: "",
    href: '/services/forensic-accounting'
  },
  {
    id: "02",
    tag: "",
    icon: "◈",
    title: "Expert Witness Testimony",
    desc: "",
    href: '/services/expert-witness-testimony'
  },
  {
    id: "03",
    tag: "",
    icon: "◎",
    title: "Joint Retention Program",
    desc: "",
    href: '/services/joint-retention-program'
  },
  {
    id: "04",
    tag: "",
    icon: "◉",
    title: "Internal Investigations",
    desc: "",
    href: '/services/internal-investigations'
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-grid relative py-16 md:py-24 overflow-hidden bg-primary-950">
      <div className="flex items-center justify-center">
        <div className="radial-glow absolute w-[800px] h-[800px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="relative z-10 w-full container-custom">

          {/* Header */}
          <div className="flex md:items-center flex-col md:flex-row gap-4 md:gap-8 mb-10 lg:mb-16">
            <div className="flex-none">

              <h2 className="text-5xl md:text-6xl lg:text-7xl text-[#fff] leading-[0.9] tracking-tight">
                Our <em className="text-[#d4af37] font-serif italic">Services</em>
              </h2>
            </div>

            <div className="flex-1 h-px header-divider w-full p-px"></div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {services.map((service) => (
              <a
                href={service.href}
                key={service.id}
                className="card-accent relative rounded-2xl bg-white/[0.05] border border-white/10 cursor-pointer p-8 h-28 transition-all duration-300 overflow-hidden group flex items-center justify-center hover:border-[#d4af37]/30 hover:bg-white/[0.08]"
              >
                <h3 className="card-title text-lg font-semibold text-white group-hover:text-[#d4af37] transition-colors duration-300 whitespace-nowrap">
                  {service.title}
                </h3>
              </a>
            ))}

          </div>

        </div>
      </div>

      <style jsx>{`

        .bg-grid {
          background-image:
            linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .header-divider {
          background: linear-gradient(90deg, rgba(212,175,55,0.5), transparent);
        }

        .radial-glow {
          background: radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%);
        }

        .card-accent::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          transform: scaleX(0);
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
        }

        .card-accent:hover::before {
          transform: scaleX(1);
        }

        .card-title {
          transition: color 0.3s;
        }

        .card-accent:hover .card-title {
          color: #ffffff;
        }

      `}</style>
    </section>
  );
}
