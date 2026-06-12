'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '/',              label: 'Home' },
  { href: '/acting',        label: 'Acting' },
  { href: '/voice-acting',  label: 'Voice' },
  { href: '/software',      label: 'Software' },
]

// Per-page accent colour for the active underline
const ACCENTS: Record<string, string> = {
  '/':             '#f0ede6',
  '/acting':       '#e8514a',
  '/voice-acting': '#4ab8e8',
  '/software':     '#a855f7',
}

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const accent = ACCENTS[pathname] ?? '#f0ede6'

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="font-display font-bold text-lg tracking-tight text-paper hover:opacity-70 transition-opacity">
          TJM
        </Link>

        {/* Links */}
        <ul className="flex gap-8 items-center">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="relative font-body text-sm font-medium tracking-wide transition-colors pb-0.5"
                  style={{ color: active ? accent : '#6b6860' }}
                >
                  {label}
                  {active && (
                    <span
                      className="absolute -bottom-0.5 left-0 right-0 h-px"
                      style={{ background: accent }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
