'use client'
import { Linkedin, Mail } from 'lucide-react'

const team = [
  {
    name: 'Adv. Sangam Kumar',
    role: 'Senior Partner — Criminal & Civil Law',
    exp: '20+ Years',
    courts: 'High Court, Supreme Court',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Adv. Sagar Mishra',
    role: 'Senior Partner — Corporate & IPR',
    exp: '18+ Years',
    courts: 'High Court, District Courts',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
  {
    name: 'Adv. Priya Sharma',
    role: 'Partner — Family & Matrimonial',
    exp: '12+ Years',
    courts: 'Family Court, High Court',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'Adv. Rahul Verma',
    role: 'Associate — Cyber Law & IT',
    exp: '8+ Years',
    courts: 'District Courts, Cyber Cells',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32 relative">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#c9a84c]" />
            <span className="font-caps text-[#c9a84c] text-xs tracking-[0.3em] uppercase">Our Advocates</span>
            <div className="w-12 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-4">
            Meet the <em className="text-gold-gradient">Legal Team</em>
          </h2>
          <p className="font-body text-[#f5f0e8]/50 text-lg max-w-xl mx-auto">
            Seasoned advocates with deep expertise across every domain of law.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="glass-card rounded-sm overflow-hidden card-glow group">
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/20 to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#c9a84c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="font-display text-[#f5f0e8] text-lg font-semibold mb-1">{member.name}</div>
                <div className="font-body text-[#c9a84c] text-sm mb-3">{member.role}</div>
                <div className="flex gap-3 text-xs font-caps text-[#f5f0e8]/40 tracking-wide mb-4">
                  <span>{member.exp}</span>
                  <span>·</span>
                  <span>{member.courts}</span>
                </div>
                <div className="flex gap-3">
                  <button className="w-8 h-8 rounded-sm border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors">
                    <Linkedin className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-8 h-8 rounded-sm border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Online consultation CTA */}
        <div className="mt-16 glass-card rounded-sm p-8 md:p-12 text-center border border-[#c9a84c]/20">
          <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-caps text-[#c9a84c] text-xs tracking-widest uppercase">1000+ Advocates Online</span>
          </div>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-[#f5f0e8] mb-4">
            Connect with an Expert <em className="text-gold-gradient">Instantly</em>
          </h3>
          <p className="font-body text-[#f5f0e8]/60 text-lg max-w-xl mx-auto mb-8">
            Licensed professionals. Confidential consultations. Instant connection from anywhere in India.
          </p>
          <a href="#contact" className="btn-gold inline-block text-[#0a0e1a] font-caps font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-sm">
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
