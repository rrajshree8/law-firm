'use client'
import { useState } from 'react'
import { MapPin, Phone, Mail, Send, MessageCircle, Clock } from 'lucide-react'

const WHATSAPP_NUMBER = '9336065812'

const practiceAreas = [
  'Criminal Matters',
  'Civil Disputes',
  'Corporate & Compliance',
  'Family & Matrimonial',
  'Consumer Disputes',
  'Intellectual Property',
  'Labour & Employment',
  'Real Estate & Property',
  'Cyber Crime & IT',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', area: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', area: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const whatsappUrl = `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello, I need legal consultation. Please connect me with an advocate.')}`

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-[#c9a84c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#c9a84c]" />
            <span className="font-caps text-[#c9a84c] text-xs tracking-[0.3em] uppercase">Get In Touch</span>
            <div className="w-12 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-4">
            Book a <em className="text-gold-gradient">Consultation</em>
          </h2>
          <p className="font-body text-[#f5f0e8]/50 text-lg max-w-xl mx-auto">
            Fill out the form or reach us directly. We respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            {[
              { icon: Phone, label: 'Phone', value: '+91 87269 68088', href: 'tel:+918726968088' },
              { icon: Mail, label: 'Email', value: 'sslawoffice01@gmail.com', href: 'mailto:sslawoffice01@gmail.com' },
              { icon: Clock, label: 'Hours', value: 'Mon–Sat: 10am – 7pm', href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass-card rounded-sm p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm border border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <div>
                  <div className="font-caps text-[#f5f0e8]/40 text-[10px] tracking-widest uppercase mb-1">{label}</div>
                  {href ? (
                    <a href={href} className="font-body text-[#f5f0e8] hover:text-[#c9a84c] transition-colors">{value}</a>
                  ) : (
                    <div className="font-body text-[#f5f0e8]">{value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Address */}
            <div className="glass-card rounded-sm p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm border border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#c9a84c]" />
              </div>
              <div>
                <div className="font-caps text-[#f5f0e8]/40 text-[10px] tracking-widest uppercase mb-1">Office</div>
                <div className="font-body text-[#f5f0e8] text-sm leading-relaxed">
                  Flat No 1302, A1 Tower, Parijaat Apartment,<br />
                  Vikrant Khand, Gomti Nagar,<br />
                  Lucknow — 226010
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-sm border border-green-500/30 bg-green-500/5 hover:bg-green-500/10 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-caps text-green-400 text-xs tracking-widest uppercase mb-1">WhatsApp Us</div>
                <div className="font-body text-[#f5f0e8] text-sm">Chat directly with an advocate</div>
              </div>
            </a>

            {/* Locations */}
            <div className="glass-card rounded-sm p-5">
              <div className="font-caps text-[#f5f0e8]/40 text-[10px] tracking-widest uppercase mb-3">We Serve</div>
              <div className="flex flex-wrap gap-2">
                {['Lucknow', 'Prayagraj', 'Jaunpur', 'Pan-India Online'].map(city => (
                  <span key={city} className="px-3 py-1 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-full font-caps text-[#c9a84c] text-[10px] tracking-widest uppercase">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 glass-card rounded-sm p-8">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40 flex items-center justify-center mb-6">
                  <Send className="w-7 h-7 text-[#c9a84c]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#f5f0e8] mb-3">Message Sent!</h3>
                <p className="font-body text-[#f5f0e8]/60 mb-6">
                  Thank you for reaching out. Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="font-caps text-[#c9a84c] text-xs tracking-widest uppercase border border-[#c9a84c]/30 px-6 py-3 rounded-sm hover:bg-[#c9a84c]/10 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-caps text-[#f5f0e8]/50 text-[10px] tracking-widest uppercase mb-2">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="input-luxury w-full px-4 py-3 rounded-sm font-body text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-caps text-[#f5f0e8]/50 text-[10px] tracking-widest uppercase mb-2">Phone *</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 00000 00000"
                      className="input-luxury w-full px-4 py-3 rounded-sm font-body text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-caps text-[#f5f0e8]/50 text-[10px] tracking-widest uppercase mb-2">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="input-luxury w-full px-4 py-3 rounded-sm font-body text-sm"
                  />
                </div>

                <div>
                  <label className="block font-caps text-[#f5f0e8]/50 text-[10px] tracking-widest uppercase mb-2">Practice Area</label>
                  <select
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                    className="input-luxury w-full px-4 py-3 rounded-sm font-body text-sm bg-[rgba(255,255,255,0.04)]"
                  >
                    <option value="" className="bg-[#0f1628]">Select an area of law</option>
                    {practiceAreas.map(a => (
                      <option key={a} value={a} className="bg-[#0f1628]">{a}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-caps text-[#f5f0e8]/50 text-[10px] tracking-widest uppercase mb-2">Brief Description *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Please describe your legal matter briefly..."
                    className="input-luxury w-full px-4 py-3 rounded-sm font-body text-sm resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="text-red-400 font-body text-sm text-center bg-red-400/10 border border-red-400/20 rounded-sm px-4 py-3">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-gold w-full text-[#0a0e1a] font-caps font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-sm flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#0a0e1a]/30 border-t-[#0a0e1a] rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Consultation Request
                    </>
                  )}
                </button>

                <p className="font-body text-[#f5f0e8]/30 text-xs text-center">
                  All consultations are strictly confidential under attorney-client privilege.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
