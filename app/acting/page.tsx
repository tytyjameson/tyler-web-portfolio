import PageShell from '@/components/layout/PageShell'

const CREDITS = [
  { title: 'The Amazing Spiderman', role: 'AP English student/football player', type: 'Feature Film', year: '2012' },
  { title: 'The Newsroom', role: 'Student Reporter', type: 'HBO series', year: '2012' },
  { title: 'Moby Dick Rehearsed', role: 'The Carpenter', type: 'Theatre Production', year: '2014' },
  { title: 'Kill Me Deadly', role: 'Detective Dewey', type: 'Theatre Production', year: '2015' },
  { title: 'Superstore', role: 'shopper - 3 episodes', type: 'Televison series', year: '2017' },
  { title: 'Westworld', role: 'Host - 3 episodes', type: 'HBO series', year: '2018' },
  { title: 'Animal Kingdom', role: 'Camera man', type: 'Televison series', year: '2020' }, 
  { title: 'Silicon Valley', role: 'Core Coder - 5th and 6th season', type: 'Televison series', year: '2018 - 2019' },
  { title: 'Hacks', role: 'Pizza Shop employee 3 episodes', type: 'HBO series', year: '2021' },
  { title: 'Mayans M.C.', role: 'Sons of Anarchy Biker - 5th season ', type: 'Television series', year: '2022' },
]

const TRAINING = [
  { school: 'Long Beach City College Theatre Program', focus: 'Two-Year Accredited Complete Theatre Program with classical and modern theatre training with added extended training in impov comedy and stage combat' },
  { school: 'Groundlings Core Program, Advanced Level', focus: 'Improv & Sketch Performance of the highest caliber including character creation, scene building, stage presence, physical improv and Sketch writing' },
  { school: 'Cal State University Long Beach', focus: 'Complete Accredited Undergrad Theatre Program graduating with a B.A. In Theatre and a minor in Music' },
  { school: 'Kalmenson & Kalmenson VO Voice Program', focus: 'Complete VO training program featuring character design, diction and speech, as well as VO improv' },
]

export default function ActingPage() {
  return (
    <PageShell
      accent="#e8514a"
      accentDark="#2a0a09"
      label="Stage & Screen"
      title="Acting"
      tagline="Character-driven work rooted in honesty. Trained in the Meisner and Adler technique with stage, film, and digital credits across drama and comedy."
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
          href="mailto:tm6002005@gmail.com"
          className="inline-block font-body text-sm font-semibold tracking-widest uppercase px-8 py-3 rounded-sm transition-all hover:-translate-y-px"
          style={{ background: '#e8514a', color: '#0f0f0f' }}
        >
          Get in Touch
        </a>
      </section>
    </PageShell>
  )
}
