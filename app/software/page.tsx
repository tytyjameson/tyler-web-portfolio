import PageShell from '@/components/layout/PageShell'

const PROJECTS = [
  {
    name: 'CastBoard',
    desc: 'Audition tracking and breakdown management tool for independent casting directors. Built with Next.js, Supabase, and Stripe.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
    status: 'Live',
    year: '2024',
    url: '#',
  },
  {
    name: 'VoxLog',
    desc: 'Session logging app for voice actors — tracks takes, notes, client revisions, and delivery history with audio waveform preview.',
    tags: ['React', 'Node.js', 'Postgres', 'Web Audio API'],
    status: 'Beta',
    year: '2024',
    url: '#',
  },
  {
    name: 'ScriptFlow',
    desc: 'Collaborative script annotation tool for theatre directors. Real-time markup, character highlighting, and export to PDF.',
    tags: ['React', 'Yjs (CRDT)', 'WebSockets', 'Tailwind'],
    status: 'Open Source',
    year: '2023',
    url: '#',
  },
  {
    name: 'FrameNote',
    desc: 'Video timestamp annotation for film editors and directors. Works with any video URL. Chrome extension + web app.',
    tags: ['TypeScript', 'Chrome Extension', 'Firebase'],
    status: 'Live',
    year: '2022',
    url: '#',
  },
]

const SKILLS = [
  { category: 'Frontend',   items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend',    items: ['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Prisma'] },
  { category: 'Tooling',    items: ['Git', 'Vercel', 'Docker', 'Figma', 'Playwright'] },
  { category: 'Interests',  items: ['Creative tooling', 'Audio/visual tech', 'Accessibility', 'Indie dev'] },
]

const STATUS_COLORS: Record<string, string> = {
  'Live':        '#4ade80',
  'Beta':        '#facc15',
  'Open Source': '#a855f7',
}

export default function SoftwarePage() {
  return (
    <PageShell
      accent="#a855f7"
      accentDark="#150a24"
      label="Engineering"
      title="Software"
      tagline="Full-stack developer with a focus on creative tooling — software that serves artists, storytellers, and makers. React, Next.js, Node, and everything in between."
    >

      {/* Projects */}
      <section className="mb-20">
        <h2 className="font-display text-3xl font-bold mb-8 pb-4 border-b border-white/8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              className="group flex flex-col justify-between p-7 rounded-sm border border-white/8 hover:border-[#a855f7]/40 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-2xl font-bold text-paper group-hover:text-[#a855f7] transition-colors">
                    {p.name}
                  </h3>
                  <span
                    className="font-body text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full ml-3 shrink-0 mt-1"
                    style={{
                      color: STATUS_COLORS[p.status] ?? '#f0ede6',
                      background: `${STATUS_COLORS[p.status] ?? '#f0ede6'}18`,
                    }}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="font-body text-sm text-dim leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-body text-[11px] font-medium tracking-wide px-2 py-0.5 rounded-sm"
                      style={{ background: '#a855f718', color: '#a855f7' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="mt-6 text-xs font-semibold tracking-widest uppercase flex items-center gap-1 transition-all group-hover:gap-2"
                style={{ color: '#a855f7' }}
              >
                View project <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <h2 className="font-display text-3xl font-bold mb-8 pb-4 border-b border-white/8">
          Skills & Stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SKILLS.map((s) => (
            <div key={s.category}>
              <p
                className="font-body text-xs font-semibold tracking-[0.25em] uppercase mb-3"
                style={{ color: '#a855f7' }}
              >
                {s.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.items.map(item => (
                  <span
                    key={item}
                    className="font-body text-sm px-3 py-1.5 rounded-sm border border-white/8 text-dim hover:text-paper hover:border-white/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="mb-20 border-l-2 pl-8" style={{ borderColor: '#a855f7' }}>
        <p className="font-display text-2xl font-bold italic text-paper mb-4 leading-snug">
          "I build tools I wish existed — usually for creative people who don't have the time to build them themselves."
        </p>
        <p className="font-body text-sm text-dim">
          Most of my projects sit at the intersection of storytelling and technology. I'm drawn to problems where the best solution isn't more features, it's better design.
        </p>
      </section>

      {/* CTA */}
      <section
        className="rounded-sm p-10 text-center"
        style={{ background: 'linear-gradient(135deg, #150a24, #0e0718)' }}
      >
        <h3 className="font-display text-4xl font-bold mb-4">Open to freelance</h3>
        <p className="font-body text-dim mb-8 max-w-md mx-auto">
          Available for contract work, especially creative tooling, portfolio sites, and small-team product builds.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="mailto:tyler@tjmartinez.com"
            className="inline-block font-body text-sm font-semibold tracking-widest uppercase px-8 py-3 rounded-sm transition-all hover:-translate-y-px"
            style={{ background: '#a855f7', color: '#f0ede6' }}
          >
            Say Hello
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-sm font-semibold tracking-widest uppercase px-8 py-3 rounded-sm border transition-all hover:-translate-y-px hover:border-[#a855f7] hover:text-[#a855f7]"
            style={{ borderColor: '#ffffff20', color: '#6b6860' }}
          >
            GitHub ↗
          </a>
        </div>
      </section>
    </PageShell>
  )
}
