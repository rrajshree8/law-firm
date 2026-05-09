'use client'
import { Scale, Instagram, Facebook, Linkedin, Youtube, Twitter, Phone, Mail, MapPin } from 'lucide-react'

const services = [
  'Criminal Matters', 'Civil Disputes', 'Corporate & Compliance',
  'Family & Matrimonial', 'IPR', 'Cyber Law',
]

const links = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Team', href: '#team' },
  { label: 'Services', href: '#services' },
  { label: 'Contact Us', href: '#contact' },
]

const social = [
  { icon: Instagram, href: 'https://www.instagram.com/sangamandsagarlawoffice/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/share/19ZeB8wuu7/', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sangam-and-sagar-law-office/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/sangamandsagar', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com/@sangamsagarlawofficellp', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-[#c9a84c]/10">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full border border-[#c9a84c]/60 flex items-center justify-center">
              <Scale className="w-5 h-5 text-[#c9a84c]" />
            </div>
            <div>
              <div className="font-display text-[#f0d080] text-sm font-semibold leading-tight">Sangam & Sagar</div>
              <div className="font-caps text-[#c9a84c]/60 text-[10px] tracking-widest uppercase">Law Office LLP</div>
            </div>
          </div>
          <p className="font-body text-[#f5f0e8]/40 text-sm leading-relaxed mb-6">
            Your trusted legal partner in Uttar Pradesh and across India. Expertise, integrity, results.
          </p>
          {/* Social */}
          <div className="flex flex-wrap gap-2">
            {social.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-sm border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c]/60 hover:text-[#c9a84c] hover:border-[#c9a84c]/50 hover:bg-[#c9a84c]/10 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-caps text-[#f5f0e8] text-xs tracking-widest uppercase mb-5 pb-2 border-b border-[#c9a84c]/15">
            Practice Areas
          </h4>
          <ul className="space-y-3">
            {services.map(s => (
              <li key={s}>
                <a href="#services" className="font-body text-[#f5f0e8]/40 text-sm hover:text-[#c9a84c] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#c9a84c]/40" />
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-caps text-[#f5f0e8] text-xs tracking-widest uppercase mb-5 pb-2 border-b border-[#c9a84c]/15">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="font-body text-[#f5f0e8]/40 text-sm hover:text-[#c9a84c] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#c9a84c]/40" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-caps text-[#f5f0e8] text-xs tracking-widest uppercase mb-5 pb-2 border-b border-[#c9a84c]/15">
            Contact
          </h4>
          <ul className="space-y-4">
            <li>
              <a href="tel:+918726968088" className="flex items-start gap-3 text-[#f5f0e8]/40 hover:text-[#c9a84c] transition-colors group">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-[#c9a84c]" />
                <span className="font-body text-sm">+91 87269 68088</span>
              </a>
            </li>
            <li>
              <a href="mailto:sslawoffice01@gmail.com" className="flex items-start gap-3 text-[#f5f0e8]/40 hover:text-[#c9a84c] transition-colors group">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-[#c9a84c]" />
                <span className="font-body text-sm">sslawoffice01@gmail.com</span>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-3 text-[#f5f0e8]/40">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#c9a84c]" />
                <span className="font-body text-sm">Flat 1302, A1 Tower, Parijaat Apt, Vikrant Khand, Gomti Nagar, Lucknow 226010</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-caps text-[#f5f0e8]/30 text-[10px] tracking-widest">
            © 2026 Sangam & Sagar Law Office LLP. All rights reserved.
          </p>
          <div className="flex gap-5 font-caps text-[#f5f0e8]/30 text-[10px] tracking-widest">
            <a href="#" className="hover:text-[#c9a84c] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#c9a84c] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#c9a84c] transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
