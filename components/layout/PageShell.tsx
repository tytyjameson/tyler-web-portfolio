import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'

interface Props {
  accent: string
  accentDark: string
  label: string
  title: string
  tagline: string
  children: React.ReactNode
}

export default function PageShell({ accent, accentDark, label, title, tagline, children }: Props) {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Navbar />

      {/* Hero band */}
      <section
        className="relative pt-36 pb-24 px-8 overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${accentDark} 0%, #0f0f0f 55%)` }}
      >
        {/* Large ghost letter */}
        <div
          className="absolute right-12 top-6 font-display text-[22rem] font-black leading-none select-none pointer-events-none opacity-[0.04]"
          style={{ color: accent }}
          aria-hidden
        >
          {title[0]}
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <p
            className="font-body text-xs font-semibold tracking-[0.3em] uppercase mb-4 animate-fade-up"
            style={{ color: accent }}
          >
            Tyler Jameson Martinez · {label}
          </p>
          <h1 className="font-display text-[clamp(3.5rem,8vw,7rem)] font-black leading-[0.9] text-paper mb-6 animate-fade-up-1">
            {title}
          </h1>
          <p className="font-body text-lg text-dim max-w-xl leading-relaxed animate-fade-up-2">
            {tagline}
          </p>
        </div>

        {/* Accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, ${accent}44, transparent)` }} />
      </section>

      {/* Page content */}
      <main className="max-w-5xl mx-auto px-8 py-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/8 py-10 px-8 text-center">
        <p className="font-body text-sm text-dim">
          <Link href="/" className="hover:text-paper transition-colors">← Back to Tyler Jameson Martinez</Link>
        </p>
      </footer>
    </div>
  )
}
