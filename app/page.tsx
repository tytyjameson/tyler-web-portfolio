import DisciplineCard from '@/components/ui/DisciplineCard'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ink text-paper overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 pt-16">

        {/* Ambient blobs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: '#e8514a' }} />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: '#4ab8e8' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: '#a855f7' }} />

        <div className="max-w-6xl mx-auto w-full relative z-10">

          {/* Eyebrow */}
          <p className="font-body text-xs font-medium tracking-[0.35em] uppercase text-dim mb-8 animate-fade-up">
            Portfolio
          </p>

          {/* Split name — the signature element */}
          <h1 className="font-display font-black leading-[0.88] mb-10" aria-label="Tyler Jameson Martinez">
            {/* TYLER — acting red */}
            <span
              className="block text-[clamp(5rem,14vw,13rem)] animate-fade-up-1"
              style={{ color: '#e8514a' }}
            >
              Tyler
            </span>
            {/* JAMESON — voice blue, italic, slightly indented */}
            <span
              className="block text-[clamp(4rem,11vw,10rem)] italic ml-[0.08em] animate-fade-up-2"
              style={{ color: '#4ab8e8' }}
            >
              Jameson
            </span>
            {/* MARTINEZ — dev purple, smaller, right-weighted */}
            <span
              className="block text-[clamp(3rem,8vw,7.5rem)] text-right animate-fade-up-3"
              style={{ color: '#a855f7' }}
            >
              Martinez
            </span>
          </h1>

          {/* Discipline tags */}
          <div className="flex gap-6 items-center flex-wrap animate-fade-up-4">
            {[
              { label: 'Software Developer', color: '#e8514a', href: '/software' },
              { label: 'Actor',            color: '#4ab8e8', href: '/acting' },
              { label: 'Voice Actor',      color: '#a855f7', href: '/voice-acting' },
            ].map(({ label, color, href }, i) => (
              <div key={label} className="flex items-center gap-6">
                <Link
                  href={href}
                  className="font-body text-sm font-medium tracking-wide transition-all hover:opacity-70"
                  style={{ color }}
                >
                  {label}
                </Link>
                {i < 2 && <span className="text-white/10 text-lg">·</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
          <span className="font-body text-xs tracking-widest uppercase text-dim">Explore</span>
          <div className="w-px h-10 bg-gradient-to-b from-dim to-transparent animate-shimmer" />
        </div>
      </section>

      {/* ── DISCIPLINE CARDS ── */}
      <section className="px-8 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-white/8 pt-16 mb-12">
            <p className="font-body text-xs font-medium tracking-[0.3em] uppercase text-dim">
              Three worlds, one artist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <DisciplineCard
              href="/acting"
              label="Stage & Screen"
              title="Acting"
              description="Character work spanning drama, comedy, and everything between. Trained in Meisner technique with regional theatre and independent film credits."
              accent="#e8514a"
              accentDark="#2a0a09"
              symbol="🎭"
              delay="0.1s"
            />
            <DisciplineCard
              href="/voice-acting"
              label="Audio & Animation"
              title="Voice Acting"
              description="A versatile instrument for animation, commercial, audiobook, and game work. Wide range from bright and energetic to gravelly and dramatic."
              accent="#4ab8e8"
              accentDark="#091a24"
              symbol="🎙"
              delay="0.2s"
            />
            <DisciplineCard
              href="/software"
              label="Engineering"
              title="Software"
              description="Full-stack developer building web applications with React, Next.js, and Node. Comfortable from idea to deployment, with a designer's eye."
              accent="#a855f7"
              accentDark="#150a24"
              symbol="⌨️"
              delay="0.3s"
            />
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="border-t border-white/8 px-8 py-24 bg-[#111]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-xs font-medium tracking-[0.3em] uppercase text-dim mb-4">About</p>
            <h2 className="font-display text-5xl font-bold leading-tight mb-6">
              The person<br />
              <span className="italic font-normal text-dim">behind the work</span>
            </h2>
          </div>
          <div className="space-y-4">
            <p className="font-body text-base text-dim leading-relaxed">
              Tyler Jameson Martinez is a multidisciplinary creative based in Las Vegas, NV . He has spent his life honing three distinct crafts — each one informing the other in unexpected ways.
            </p>
            <p className="font-body text-base text-dim leading-relaxed">
              His acting trains him to inhabit perspective. His voice work sharpens his ear for nuance and rhythm. His software practice gives him a builder's instinct for systems. Together, they make something harder to categorize — and more interesting for it.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/8 py-10 px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <p className="font-display font-bold text-lg text-dim">TJM</p>
          <p className="font-body text-sm text-dim">© 2026 Tyler Jameson Martinez</p>
        </div>
      </footer>
    </div>
  )
}
