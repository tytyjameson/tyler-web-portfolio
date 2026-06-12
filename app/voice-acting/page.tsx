import PageShell from '@/components/layout/PageShell'

const DEMOS = [
  { label: 'Commercial Demo',  description: 'Conversational, warm, trustworthy. Spots ranging from automotive to consumer tech.' },
  { label: 'Animation Demo',   description: 'Characters spanning heroic leads, comedic sidekicks, and menacing villains.' },
  { label: 'Narration Demo',   description: 'Documentary and e-learning. Authoritative with natural pacing.' },
  { label: 'Audiobook Demo',   description: 'Long-form storytelling. Consistent voice for multi-character fiction.' },
]

const CREDITS = [
  { title: 'Starfall Chronicles (Game)',  role: 'Commander Vael — Lead',      type: 'Video Game',   year: '2024' },
  { title: 'The Bright Side (Podcast)',   role: 'Host & Co-producer',         type: 'Podcast',      year: '2023–Present' },
  { title: 'Apex Auto — National Campaign', role: 'Brand Voice',              type: 'Commercial',   year: '2023' },
  { title: 'Letters to No One (Audiobook)', role: 'Full Cast, 6 characters',  type: 'Audiobook',    year: '2022' },
  { title: 'TechLearn LMS',              role: 'Platform Narration Voice',    type: 'E-Learning',   year: '2022' },
  { title: 'Hollow Kids (Animation)',     role: 'Finch — Series Regular',     type: 'Animation',    year: '2021' },
]

const RANGE = [
  { tag: 'Warm & Conversational', desc: 'The next-door neighbor. Relatable, trustworthy, never slimy.' },
  { tag: 'Commanding & Gravelly',  desc: 'Authority figures, antagonists, documentary narration.' },
  { tag: 'Young & Energetic',      desc: 'Animation leads, youth-targeted commercial, game protagonists.' },
  { tag: 'Dry & Deadpan',          desc: 'Comedy spots, sardonic characters, corporate satire.' },
]

export default function VoiceActingPage() {
  return (
    <PageShell
      accent="#4ab8e8"
      accentDark="#091a24"
      label="Audio & Animation"
      title="Voice Acting"
      tagline="A versatile instrument across animation, commercial, game, audiobook, and narration work. Wide range. Dedicated home studio. Fast turnaround."
    >

      {/* Studio note */}
      <div
        className="flex items-start gap-4 p-6 rounded-sm mb-16 border"
        style={{ borderColor: '#4ab8e822', background: '#4ab8e808' }}
      >
        <span className="text-2xl mt-0.5">🎙</span>
        <div>
          <p className="font-body text-sm font-semibold text-paper mb-1">Professional Home Studio</p>
          <p className="font-body text-sm text-dim">
            Acoustically treated recording space. Neumann TLM 103 · Universal Audio Apollo · Izotope RX10.
            Broadcast-ready files delivered within 24 hours for most projects.
          </p>
        </div>
      </div>

      {/* Demo reels */}
      <section className="mb-20">
        <h2 className="font-display text-3xl font-bold mb-8 pb-4 border-b border-white/8">
          Demo Reels
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DEMOS.map((d) => (
            <div
              key={d.label}
              className="group p-6 rounded-sm border border-white/8 hover:border-[#4ab8e8]/40 bg-white/[0.02] transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="font-display text-lg font-semibold text-paper">{d.label}</p>
                {/* Fake play button */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs transition-transform group-hover:scale-110"
                  style={{ background: '#4ab8e8', color: '#0f0f0f' }}
                >
                  ▶
                </div>
              </div>
              <p className="font-body text-sm text-dim">{d.description}</p>
            </div>
          ))}
        </div>
        <p className="font-body text-xs text-dim mt-4 text-center">
          Demo files available on request · <a href="mailto:tyler@tjmartinez.com" className="underline hover:text-paper transition-colors" style={{ color: '#4ab8e8' }}>tyler@tjmartinez.com</a>
        </p>
      </section>

      {/* Range */}
      <section className="mb-20">
        <h2 className="font-display text-3xl font-bold mb-8 pb-4 border-b border-white/8">
          Range
        </h2>
        <div className="space-y-0 divide-y divide-white/5">
          {RANGE.map((r) => (
            <div key={r.tag} className="py-5 flex gap-6 items-start">
              <span
                className="font-body text-xs font-semibold tracking-widest uppercase shrink-0 w-44 pt-0.5"
                style={{ color: '#4ab8e8' }}
              >
                {r.tag}
              </span>
              <p className="font-body text-sm text-dim leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Credits */}
      <section className="mb-20">
        <h2 className="font-display text-3xl font-bold mb-8 pb-4 border-b border-white/8">
          Selected Credits
        </h2>
        <div className="divide-y divide-white/5">
          {CREDITS.map((c) => (
            <div key={c.title} className="py-5 grid grid-cols-[1fr_auto] gap-4 items-start group hover:bg-white/[0.02] -mx-4 px-4 rounded-sm transition-colors">
              <div>
                <p className="font-display text-xl font-semibold text-paper mb-1 group-hover:text-[#4ab8e8] transition-colors">{c.title}</p>
                <p className="font-body text-sm text-dim">{c.role}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-body text-xs font-medium tracking-wide mb-1" style={{ color: '#4ab8e8' }}>{c.type}</p>
                <p className="font-body text-xs text-dim">{c.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="rounded-sm p-10 text-center"
        style={{ background: 'linear-gradient(135deg, #091a24, #060f18)' }}
      >
        <h3 className="font-display text-4xl font-bold mb-4">Let's make something</h3>
        <p className="font-body text-dim mb-8 max-w-md mx-auto">
          Custom auditions, directed sessions via Source Connect, and full project packages available.
        </p>
        <a
          href="mailto:tyler@tjmartinez.com"
          className="inline-block font-body text-sm font-semibold tracking-widest uppercase px-8 py-3 rounded-sm transition-all hover:-translate-y-px"
          style={{ background: '#4ab8e8', color: '#0f0f0f' }}
        >
          Book a Session
        </a>
      </section>
    </PageShell>
  )
}
