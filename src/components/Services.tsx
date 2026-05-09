'use client'
import { useState } from 'react'
import { Scale, Building2, Heart, ShoppingBag, Lightbulb, Briefcase, Home, Cpu, ChevronRight } from 'lucide-react'

const services = [
  {
    id: 'criminal',
    icon: Scale,
    title: 'Criminal Matters',
    description: 'Comprehensive criminal defense from bail applications to Supreme Court litigation.',
    items: ['Bail Applications', 'Fraud & Cheating Defense', 'FIR Quashing', 'High Court Criminal Services', 'Appeals & Revision', 'Trial Representation', 'Supreme Court Criminal Litigation'],
  },
  {
    id: 'civil',
    icon: Building2,
    title: 'Civil Disputes',
    description: 'Expert resolution of civil disputes with a strong track record in courts across UP.',
    items: ['Property Disputes', 'Contract Disputes', 'Injunction Matters', 'Execution Proceedings', 'Civil Appeals', 'Recovery Suits', 'Declaratory Suits'],
  },
  {
    id: 'corporate',
    icon: Briefcase,
    title: 'Corporate & Compliance',
    description: 'End-to-end corporate legal support, audits, and regulatory compliance.',
    items: ['Company Compliance', 'Legal Audit', 'Contract Drafting', 'Due Diligence', 'Regulatory Advisory', 'Startup Legal Support', 'MCA Filings'],
  },
  {
    id: 'family',
    icon: Heart,
    title: 'Family & Matrimonial',
    description: 'Sensitive handling of family law matters with discretion and expertise.',
    items: ['Divorce Proceedings', 'Child Custody', 'Maintenance & Alimony', 'Domestic Violence', 'Adoption', 'Succession & Inheritance', 'Matrimonial Disputes'],
  },
  {
    id: 'consumer',
    icon: ShoppingBag,
    title: 'Consumer & E-Commerce',
    description: 'Protecting consumer rights and resolving e-commerce disputes effectively.',
    items: ['Consumer Forum Cases', 'E-Commerce Disputes', 'Product Liability', 'Service Deficiency', 'Online Fraud', 'Refund Disputes', 'RERA Matters'],
  },
  {
    id: 'ipr',
    icon: Lightbulb,
    title: 'Intellectual Property',
    description: 'Safeguarding your innovations, brands, and creative works.',
    items: ['Trademark Registration', 'Patent Filing', 'Copyright Protection', 'IP Litigation', 'Trade Secret', 'Design Registration', 'IP Consultancy'],
  },
  {
    id: 'labour',
    icon: Users,
    title: 'Labour & Employment',
    description: 'Navigating complex employment laws for businesses and individuals.',
    items: ['Employment Disputes', 'Wrongful Termination', 'Labour Tribunal', 'PF & ESIC Matters', 'Service Matters', 'HR Policy Drafting', 'Industrial Disputes'],
  },
  {
    id: 'realestate',
    icon: Home,
    title: 'Real Estate & Property',
    description: 'Comprehensive legal solutions for all property-related matters.',
    items: ['Property Disputes', 'Title Verification', 'RERA Complaints', 'Lease Agreements', 'Partition Suits', 'Property Registration', 'Builder Disputes'],
  },
  {
    id: 'cyber',
    icon: Cpu,
    title: 'Cyber Crime & IT',
    description: 'Cutting-edge legal expertise in cybercrime and digital law.',
    items: ['Cybercrime Cases', 'Data Breach', 'Online Defamation', 'Digital Fraud', 'IT Act Cases', 'Social Media Crimes', 'Hacking Defense'],
  },
]

function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

export default function Services() {
  const [active, setActive] = useState('criminal')
  const current = services.find(s => s.id === active)!

  return (
    <section id="services" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#c9a84c]" />
            <span className="font-caps text-[#c9a84c] text-xs tracking-[0.3em] uppercase">Practice Areas</span>
            <div className="w-12 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-4">
            Our Litigation <em className="text-gold-gradient">Services</em>
          </h2>
          <p className="font-body text-[#f5f0e8]/50 text-lg max-w-xl mx-auto">
            Comprehensive legal representation across all courts and domains in Uttar Pradesh and India.
          </p>
        </div>

        {/* Service tabs — horizontal scroll on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-hide">
          {services.map(s => {
            const Icon = s.icon
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-caps tracking-widest uppercase transition-all duration-300 ${
                  active === s.id
                    ? 'bg-[#c9a84c] text-[#0a0e1a] font-semibold'
                    : 'border border-[#c9a84c]/20 text-[#f5f0e8]/50 hover:border-[#c9a84c]/50 hover:text-[#c9a84c]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {s.title}
              </button>
            )
          })}
        </div>

        {/* Active service panel */}
        <div className="glass-card rounded-sm p-8 md:p-12 grid md:grid-cols-2 gap-10">
          <div>
            {(() => {
              const Icon = current.icon
              return (
                <div className="w-14 h-14 rounded-sm border border-[#c9a84c]/30 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#c9a84c]" />
                </div>
              )
            })()}
            <h3 className="font-display text-3xl font-bold text-[#f5f0e8] mb-4">{current.title}</h3>
            <p className="font-body text-[#f5f0e8]/60 text-lg leading-relaxed mb-8">{current.description}</p>
            <a href="#contact" className="btn-gold inline-flex items-center gap-2 text-[#0a0e1a] font-caps font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-sm">
              Consult Now <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {current.items.map(item => (
              <div key={item} className="flex items-center gap-3 py-3 border-b border-[#c9a84c]/10 last:border-0 group">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0 group-hover:scale-150 transition-transform" />
                <span className="font-body text-[#f5f0e8]/70 group-hover:text-[#f5f0e8] transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
