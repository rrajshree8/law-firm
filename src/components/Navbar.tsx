'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Scale } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Our Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a0e1a]/95 backdrop-blur-md border-b border-[#c9a84c]/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-[#c9a84c]/60 flex items-center justify-center group-hover:border-[#c9a84c] transition-colors">
            <Scale className="w-5 h-5 text-[#c9a84c]" />
          </div>
          <div>
            <div className="font-display text-[#f0d080] text-sm font-semibold leading-tight tracking-wide">Sangam & Sagar</div>
            <div className="font-caps text-[#c9a84c]/70 text-[10px] tracking-widest uppercase">Law Office LLP</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-caps text-[#f5f0e8]/70 hover:text-[#c9a84c] text-sm tracking-widest uppercase transition-colors duration-300 border-gold-animated pb-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block btn-gold text-[#0a0e1a] font-caps font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-sm"
        >
          Book Consultation
        </a>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-[#c9a84c]">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0f1628]/98 backdrop-blur-md border-t border-[#c9a84c]/10 px-6 py-6 space-y-4">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block font-caps text-[#f5f0e8]/70 hover:text-[#c9a84c] text-sm tracking-widest uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block btn-gold text-center text-[#0a0e1a] font-caps font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-sm mt-4"
          >
            Book Consultation
          </a>
        </div>
      )}
    </nav>
  )
}
