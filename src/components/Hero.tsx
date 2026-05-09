'use client'
import { useEffect, useRef } from 'react'
import { ArrowDown, Shield, Award, Users } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onScroll = () => {
      const offset = window.scrollY * 0.4
      el.style.backgroundPositionY = `${offset}px`
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background layers */}
      <div
        ref={heroRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80)' }}
      />
      {/* Dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/90 via-[#0a0e1a]/75 to-[#0a0e1a]/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/80 via-transparent to-[#0a0e1a]/60" />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Corner ornaments */}
      <div className="absolute top-24 left-8 w-20 h-20 border-l border-t border-[#c9a84c]/30 hidden md:block" />
      <div className="absolute top-24 right-8 w-20 h-20 border-r border-t border-[#c9a84c]/30 hidden md:block" />
      <div className="absolute bottom-20 left-8 w-20 h-20 border-l border-b border-[#c9a84c]/30 hidden md:block" />
      <div className="absolute bottom-20 right-8 w-20 h-20 border-r border-b border-[#c9a84c]/30 hidden md:block" />

      {/* Live badge */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-4 py-1.5 rounded-full backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
        <span className="font-caps text-[#c9a84c] text-xs tracking-widest uppercase">Live Legal Services</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#c9a84c]" />
            <span className="font-caps text-[#c9a84c] text-xs tracking-[0.3em] uppercase">Established Legal Excellence</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
            <span className="block text-[#f5f0e8]">Sangam &</span>
            <span className="block text-gold-gradient italic">Sagar</span>
            <span className="block text-[#f5f0e8] text-4xl md:text-5xl lg:text-6xl font-medium mt-2">Law Office LLP</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-[#f5f0e8]/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            Your trusted legal partner across Lucknow, Prayagraj & Jaunpur. Expert litigation,
            consultancy, and compliance — accessible online, anytime across India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a href="#contact" className="btn-gold text-[#0a0e1a] font-caps font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-sm">
              Consult an Advocate
            </a>
            <a href="#services" className="border border-[#c9a84c]/40 text-[#c9a84c] font-caps text-sm tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-[#c9a84c]/10 transition-colors">
              View Services
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:gap-16">
            {[
              { icon: Users, value: '1000+', label: 'Legal Experts' },
              { icon: Award, value: '44+', label: 'Years Experience' },
              { icon: Shield, value: '4.6/5', label: 'Client Rating' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#c9a84c]/30 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#c9a84c]" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-[#f0d080]">{value}</div>
                  <div className="font-caps text-[#f5f0e8]/50 text-[11px] tracking-widest uppercase">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#c9a84c]/50">
        <span className="font-caps text-[10px] tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  )
}
