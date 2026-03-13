'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.12)]">

            {services.map((service) => (
              <a
                href={service.href}
                key={service.id}
                className="card-accent h-36 relative bg-primary-950  cursor-pointer p-6 transition-colors duration-300 overflow-hidden group flex flex-col justify-center"
              >
                {/* <div className="flex justify-between items-start mb-4"> */}
                  {/* <span className="font-mono text-xs tracking-[0.2em] text-[#d4af37] opacity-60">
                    {service.id}
                  </span> */}

                  {/* <span className="card-tag font-mono text-[9px] tracking-[0.25em] uppercase text-[rgba(212,175,55,0.6)] border border-[rgba(212,175,55,0.6)] px-2.5 py-1 pt-[7px]">
                    {service.tag}
                  </span> */}
                {/* </div> */}

                {/* <span className="card-icon block text-[32px] text-[rgba(212,175,55,0.6)] mb-4">
                  {service.icon}
                </span> */}

                <h3 className="card-title text-center text-xl font-semibold text-[#fff]">
                  {service.title}
                </h3>

                {/* <p className="card-desc font-mono text-[12px] text-[rgba(200,195,180,0.5)] leading-relaxed">
                  {service.desc}
                </p> */}
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

        .card-desc {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease;
        }

        .card-accent:hover .card-desc {
          max-height: 120px;
          opacity: 1;
        }

        .card-tag {
          transition: color 0.3s, border-color 0.3s, background 0.3s;
        }

        .card-accent:hover .card-tag {
          color: #d4af37;
          border-color: rgba(212,175,55,0.5);
          background: rgba(212,175,55,0.06);
        }

        .card-icon {
          transition: color 0.4s, transform 0.4s;
        }

        .card-accent:hover .card-icon {
          color: rgba(212,175,55,1);
          transform: scale(1.1);
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