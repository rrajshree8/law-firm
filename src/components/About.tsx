'use client'
import { CheckCircle, Globe, Clock, Lock } from 'lucide-react'

const pillars = [
  {
    icon: CheckCircle,
    title: 'Proven Track Record',
    desc: 'Decades of successful case outcomes across criminal, civil, corporate, and family law domains.',
  },
  {
    icon: Globe,
    title: 'Pan-India Online Consultancy',
    desc: 'Connect with our expert advocates from anywhere in India — fast, confidential, digital-first.',
  },
  {
    icon: Clock,
    title: 'Available When You Need',
    desc: 'Flexible consultation hours and rapid response times, because legal issues don\'t wait.',
  },
  {
    icon: Lock,
    title: 'Absolute Confidentiality',
    desc: 'Every conversation, every document, every matter handled with strict professional secrecy.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Left bg glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#c9a84c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + overlaid stats */}
          <div className="relative">
            <div className="relative rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                alt="Law office interior"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/80 via-transparent to-transparent" />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-sm p-6 max-w-[200px]">
              <div className="font-display text-4xl font-bold text-gold-gradient mb-1">44+</div>
              <div className="font-caps text-[#f5f0e8]/60 text-xs tracking-widest uppercase">Years of Combined Legal Experience</div>
            </div>

            <div className="absolute -top-6 -left-6 glass-card rounded-sm p-5 max-w-[180px]">
              <div className="font-display text-3xl font-bold text-gold-gradient mb-1">1000+</div>
              <div className="font-caps text-[#f5f0e8]/60 text-xs tracking-widest uppercase">Cases Successfully Handled</div>
            </div>

            {/* Ornamental border */}
            <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-[#c9a84c]/40" />
            <div className="absolute bottom-10 right-10 w-16 h-16 border-r-2 border-b-2 border-[#c9a84c]/40" />
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-[#c9a84c]" />
              <span className="font-caps text-[#c9a84c] text-xs tracking-[0.3em] uppercase">Who We Are</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-6 leading-tight">
              Premier Legal Firm<br />
              Across <em className="text-gold-gradient">Uttar Pradesh</em>
            </h2>

            <p className="font-body text-[#f5f0e8]/60 text-lg leading-relaxed mb-6">
              Sangam & Sagar Law Office LLP is a multi-practice legal firm serving clients across Lucknow,
              Prayagraj (Allahabad), Jaunpur and the entire country through our online platform.
              We combine deep legal expertise with a client-first approach — ensuring justice is
              accessible, transparent, and effective.
            </p>

            <p className="font-body text-[#f5f0e8]/60 text-lg leading-relaxed mb-10">
              Our team of seasoned advocates brings unmatched breadth across criminal, civil, corporate,
              family, IPR, and cyber law, with a reputation built on results and relationships.
            </p>

            {/* Pillars grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-sm border border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c]/10 transition-all">
                    <Icon className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <div>
                    <div className="font-caps text-[#f5f0e8] text-sm tracking-wide mb-1">{title}</div>
                    <div className="font-body text-[#f5f0e8]/50 text-sm leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
