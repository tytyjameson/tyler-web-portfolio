import PageShell from '@/components/layout/PageShell'

const CREDITS = [
  { title: 'The Glass Meridian',    role: 'Marcus Webb (Lead)',         type: 'Feature Film',    year: '2024' },
  { title: 'Hollow Season',         role: 'Detective Ray Cortes',       type: 'Short Film',      year: '2023' },
  { title: 'A Streetcar Named Desire', role: 'Stanley Kowalski',       type: 'Stage — Ensemble Theatre', year: '2023' },
  { title: 'Ordinary Machines',     role: 'Nathan (Supporting)',        type: 'Indie Feature',   year: '2022' },
  { title: 'Death of a Salesman',   role: 'Biff Loman',                type: 'Stage — Repertory', year: '2022' },
  { title: 'Parallel',              role: 'James / Alt-James (Lead)',   type: 'Short Film',      year: '2021' },
  { title: 'The Waiting Room',      role: 'Ensemble',                  type: 'Stage — Fringe Festival', year: '2021' },
  { title: 'Westside Run',          role: 'Detective Huang',           type: 'Web Series',      year: '2020' },
]

const TRAINING = [
  { school: 'The Meisner Studio, LA',   focus: 'Two-Year Meisner Technique Program' },
  { school: 'Second City Chicago',      focus: 'Improv & Sketch Performance' },
  { school: 'UCLA Extension',           focus: 'On-Camera Acting for Film & Television' },
  { school: 'Private Coaching',         focus: 'Dialect & Accent Reduction — RP, Southern, Boston' },
]

export default function ActingPage() {
  return (
    <PageShell
      accent="#e8514a"
      accentDark="#2a0a09"
      label="Stage & Screen"
      title="Acting"
      tagline="Character-driven work rooted in honesty. Trained in the Meisner technique with stage, film, and digital credits across drama and dark comedy."
    >

      {/* Credits */}
      <section className="mb-20">
        <h2 className="font-display text-3xl font-bold mb-8 pb-4 border-b border-white/8">
          Selected Credits
        </h2>
        <div className="divide-y divide-white/5">
          {CREDITS.map((c) => (
            <div
              key={c.title}
              className="py-5 grid grid-cols-[1fr_auto] gap-4 items-start group hover:bg-white/[0.02] -mx-4 px-4 transition-colors rounded-sm"
            >
              <div>
                <p className="font-display text-xl font-semibold text-paper mb-1 group-hover:text-[#e8514a] transition-colors">
                  {c.title}
                </p>
                <p className="font-body text-sm text-dim">{c.role}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-body text-xs font-medium tracking-wide text-[#e8514a] mb-1">{c.type}</p>
                <p className="font-body text-xs text-dim">{c.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Training */}
      <section className="mb-20">
        <h2 className="font-display text-3xl font-bold mb-8 pb-4 border-b border-white/8">
          Training
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TRAINING.map((t) => (
            <div
              key={t.school}
              className="p-6 rounded-sm border border-white/8 bg-white/[0.02] hover:border-[#e8514a]/30 transition-colors"
            >
              <p className="font-body text-xs tracking-widest uppercase text-[#e8514a] mb-2">{t.school}</p>
              <p className="font-display text-lg font-semibold text-paper">{t.focus}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reel / CTA */}
      <section
        className="rounded-sm p-10 text-center"
        style={{ background: 'linear-gradient(135deg, #2a0a09, #1a0605)' }}
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-[#e8514a] mb-4">Showreel</p>
        <h3 className="font-display text-4xl font-bold mb-4">Ready to work together?</h3>
        <p className="font-body text-dim mb-8 max-w-md mx-auto">
          Reel and sides available on request. Happy to self-tape or schedule a read.
        </p>
        <a
          href="mailto:tyler@tjmartinez.com"
          className="inline-block font-body text-sm font-semibold tracking-widest uppercase px-8 py-3 rounded-sm transition-all hover:-translate-y-px"
          style={{ background: '#e8514a', color: '#0f0f0f' }}
        >
          Get in Touch
        </a>
      </section>
    </PageShell>
  )
}
