'use client'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Gupta',
    location: 'Lucknow',
    rating: 5,
    text: 'Sangam & Sagar handled my property dispute with exceptional professionalism. Their knowledge of UP property law is unmatched. Got a favorable decree within 14 months.',
    case: 'Property Dispute',
  },
  {
    name: 'Meena Agarwal',
    location: 'Prayagraj',
    rating: 5,
    text: 'Outstanding family law support during one of the most difficult times of my life. The team was compassionate, strategic, and delivered results that protected my children\'s interests.',
    case: 'Matrimonial Matter',
  },
  {
    name: 'Amit Srivastava',
    location: 'Jaunpur',
    rating: 5,
    text: 'Bail was granted within 48 hours. The criminal law team knows exactly how to move through the system. Highly recommended for any criminal matter.',
    case: 'Criminal Defense',
  },
  {
    name: 'Pradeep Tiwari',
    location: 'Online Consultation',
    rating: 5,
    text: 'Used the online consultation service from Delhi. Got expert advice on a complex corporate compliance matter. The advocate was thorough, clear, and accessible.',
    case: 'Corporate Compliance',
  },
  {
    name: 'Sunita Pandey',
    location: 'Lucknow',
    rating: 5,
    text: 'The IPR team registered my trademark and also helped protect it when a competitor tried to copy it. Knowledgeable, professional, and result-oriented.',
    case: 'Trademark Protection',
  },
  {
    name: 'Vivek Mishra',
    location: 'Varanasi',
    rating: 4,
    text: 'Consumer forum case against a builder was handled efficiently. Received compensation within the stipulated time. Professional team with great communication throughout.',
    case: 'Consumer Forum',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #c9a84c 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#c9a84c]" />
            <span className="font-caps text-[#c9a84c] text-xs tracking-[0.3em] uppercase">Client Testimonials</span>
            <div className="w-12 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-4">
            What Our <em className="text-gold-gradient">Clients Say</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card rounded-sm p-7 card-glow relative">
              {/* Quote icon */}
              <Quote className="absolute top-5 right-5 w-8 h-8 text-[#c9a84c]/15" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${j < t.rating ? 'text-[#c9a84c] fill-[#c9a84c]' : 'text-[#c9a84c]/30'}`}
                  />
                ))}
              </div>

              {/* Tag */}
              <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/20 px-3 py-1 rounded-full mb-4">
                <span className="font-caps text-[#c9a84c] text-[10px] tracking-widest uppercase">{t.case}</span>
              </div>

              {/* Text */}
              <p className="font-body text-[#f5f0e8]/70 text-base leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#c9a84c]/10">
                <div className="w-10 h-10 rounded-full bg-[#c9a84c]/20 flex items-center justify-center">
                  <span className="font-display text-[#c9a84c] font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <div className="font-caps text-[#f5f0e8] text-sm tracking-wide">{t.name}</div>
                  <div className="font-body text-[#f5f0e8]/40 text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
