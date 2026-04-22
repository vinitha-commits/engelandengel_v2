import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'

type EventPost = {
  title: string
  description: string
  content: string
  date: string
  dateISO: string
  category: string
  location: string
  image: string
  imageAlt: string
  tags: string[]
}

const eventPosts: Record<string, EventPost> = {
  'abtl-dinner-program-omni-hotel-2026': {
    title: 'Engel & Engel Sponsors ABTL Dinner Program at the Omni Hotel',
    description:
      'Engel & Engel is proud to sponsor the Association of Business Trial Lawyers\' dinner program on Wednesday, April 22nd at the Omni Hotel.',
    content: `
      <p>Engel &amp; Engel is proud to sponsor the Association of Business Trial Lawyers' dinner program on Wednesday, April 22nd at the Omni Hotel. The ABTL provides a forum for litigators and judges to discuss issues critical to all business trial attorneys. Please join us.</p>

      <h2>About the ABTL</h2>
      <p>The Association of Business Trial Lawyers brings together litigators, judges, and legal professionals who shape the landscape of business litigation in California. Its dinner programs foster direct dialogue on the issues that matter most to trial attorneys — from evolving discovery standards to expert testimony and trial strategy.</p>

      <h2>Why We're Sponsoring</h2>
      <p>As forensic accountants who routinely serve as expert witnesses in high-stakes business disputes, we value the ABTL's role in advancing the practice of business litigation. Supporting this program reflects our continued commitment to the trial bar and the judges who preside over these complex matters.</p>

      <h2>Event Details</h2>
      <ul>
        <li><strong>Date:</strong> Wednesday, April 22, 2026</li>
        <li><strong>Venue:</strong> Omni Hotel, Los Angeles</li>
        <li><strong>Host:</strong> Association of Business Trial Lawyers</li>
      </ul>

      <p>If you're attending, stop by and say hello — we'd love to connect.</p>
    `,
    date: 'April 22, 2026',
    dateISO: '2026-04-22T18:00:00-08:00',
    category: 'Events',
    location: 'Omni Hotel, Los Angeles',
    image: '/images/event2.jpg',
    imageAlt: 'ABTL Dinner Program at the Omni Hotel',
    tags: ['#ABTL', '#BusinessTrialLawyers', '#Sponsorship', '#Litigation', '#Events'],
  },
  'institute-for-corporate-counsel-program-2025': {
    title: 'Engel & Engel Platinum Sponsor of the Institute for Corporate Counsel Program',
    description:
      'Engel & Engel is proud to be a Platinum Sponsor of this year\'s Institute for Corporate Counsel Program held at The California Club on December 3, 2025.',
    content: `
      <p>Engel &amp; Engel is proud to be a Platinum Sponsor of this year's Institute for Corporate Counsel Program held at The California Club on December 3, 2025. This day-long conference hosted by the Gould School of Law and the LACBA Business Law Section brings together top law and consulting firms dedicated to understanding the challenges of California's business environment and changes in the law that impact in-house legal departments.</p>

      <h2>About the Program</h2>
      <p>The Institute for Corporate Counsel Program is a premier CLE event that convenes in-house counsel, outside attorneys, and leading consultants to examine the legal, regulatory, and economic forces shaping California business. Sessions cover governance, compliance, litigation trends, and financial expert considerations central to corporate decision-making.</p>

      <h2>Why We're a Platinum Sponsor</h2>
      <p>As forensic accountants whose work often sits at the intersection of corporate strategy and high-stakes litigation, Engel &amp; Engel is proud to support a program that directly serves the in-house legal community. Our sponsorship reflects our commitment to helping general counsel and their teams navigate the financial complexities of today's business and regulatory environment.</p>

      <h2>Event Details</h2>
      <ul>
        <li><strong>Date:</strong> Wednesday, December 3, 2025</li>
        <li><strong>Venue:</strong> The California Club, Los Angeles</li>
        <li><strong>Hosts:</strong> USC Gould School of Law &amp; LACBA Business Law Section</li>
      </ul>

      <p>If you'll be attending, we look forward to seeing you there.</p>
    `,
    date: 'December 3, 2025',
    dateISO: '2025-12-03T09:00:00-08:00',
    category: 'Events',
    location: 'The California Club, Los Angeles',
    image: '/images/event2.jpg',
    imageAlt: 'Institute for Corporate Counsel Program at The California Club',
    tags: ['#InstituteForCorporateCounsel', '#ICC', '#PlatinumSponsor', '#GouldSchoolOfLaw', '#LACBA', '#Events'],
  },
}

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return Object.keys(eventPosts).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = eventPosts[params.slug]
  if (!post) {
    return {
      title: 'Event Not Found | Engel & Engel',
      description: 'The requested event could not be found.',
    }
  }
  return {
    title: `${post.title} | Engel & Engel`,
    description: post.description,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.dateISO,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

export default function EventDetailPage({ params }: Props) {
  const post = eventPosts[params.slug]
  if (!post) notFound()

  return (
    <>
      <main>
        <Header />

        {/* Hero */}
        <section className="relative h-[500px] lg:h-[650px] overflow-hidden">
          <div className="absolute inset-0">
            <Image src={post.image} alt={post.imageAlt} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
          </div>

          <div className="relative z-10 h-full flex items-end">
            <div className="container mx-auto px-6 pb-16">
              <div className="max-w-4xl mx-auto">
                <nav aria-label="Breadcrumb" className="mb-8">
                  <ol className="flex items-center space-x-2 text-sm text-[#D4AF37]/80">
                    <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
                    <li className="text-white/40">/</li>
                    <li><Link href="/news-and-insights" className="hover:text-[#D4AF37] transition-colors">News &amp; Insights</Link></li>
                    <li className="text-white/40">/</li>
                    <li className="text-white font-medium">{post.category}</li>
                  </ol>
                </nav>

                <div className="mb-4">
                  <span className="inline-block bg-[#D4AF37] text-primary-950 px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase">
                    {post.category}
                  </span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                  {post.title}
                </h1>
                <p className="text-lg lg:text-xl text-white/85 mb-8 leading-relaxed max-w-3xl font-light">
                  {post.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-white/85 text-sm">
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="text-white/40">•</span>
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {post.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-10">
                {post.tags.map((tag, i) => (
                  <span key={i} className="bg-slate-100 text-primary-950 px-3 py-1 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="prose prose-lg max-w-none prose-headings:text-primary-950 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-primary-950 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-ul:my-4 prose-li:my-1"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>

        {/* Related Events */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-[#D4AF37] text-xs font-bold tracking-[0.4em] uppercase mb-3">More</p>
                <h2 className="text-3xl font-bold text-primary-950 tracking-tight">Other Events</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(eventPosts)
                  .filter(([slug]) => slug !== params.slug)
                  .map(([slug, related]) => (
                    <Link
                      key={slug}
                      href={`/news-and-insights/${slug}`}
                      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
                    >
                      <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
                        <Image
                          src={related.image}
                          alt={related.imageAlt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#D4AF37] text-primary-950 px-3 py-1 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase">
                            {related.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-xs text-gray-400 mb-2">{related.date}</p>
                        <h3 className="text-lg font-bold text-primary-950 mb-3 leading-snug group-hover:text-[#D4AF37] transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                          {related.description}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>

              <div className="text-center mt-12">
                <Link href="/news-and-insights">
                  <Button as="span" className="bg-primary-950 text-white hover:bg-[#D4AF37] hover:text-primary-950" size="lg">
                    View All News &amp; Insights
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary-950">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">
                Need Expert <span className="font-serif italic text-[#D4AF37]">Forensic Accounting</span> Services?
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                Contact Engel &amp; Engel LLP for professional forensic accounting, fraud investigation, and expert witness testimony services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-block px-8 py-4 bg-[#D4AF37] text-primary-950 font-bold text-sm tracking-wider uppercase hover:bg-white transition-colors rounded-lg">
                  Contact Us
                </Link>
                <Link href="/news-and-insights" className="inline-block px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-wider uppercase hover:bg-white/10 transition-colors rounded-lg">
                  Back to News &amp; Insights
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
