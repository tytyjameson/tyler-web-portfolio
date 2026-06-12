import Link from 'next/link'

interface Props {
  href: string
  label: string
  title: string
  description: string
  accent: string
  accentDark: string
  symbol: string
  delay?: string
}

export default function DisciplineCard({
  href, label, title, description, accent, accentDark, symbol, delay = '0s'
}: Props) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between p-8 rounded-sm border border-white/8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/20 animate-fade-up"
      style={{
        animationDelay: delay,
        background: `linear-gradient(145deg, #161616, ${accentDark})`,
      }}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${accent}18, transparent 60%)` }}
      />

      {/* Symbol */}
      <div
        className="text-4xl mb-6 w-14 h-14 flex items-center justify-center rounded-sm text-2xl transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${accent}18`, color: accent }}
      >
        {symbol}
      </div>

      <div>
        <p className="font-body text-xs font-medium tracking-[0.2em] uppercase mb-2" style={{ color: accent }}>
          {label}
        </p>
        <h3 className="font-display text-2xl font-bold text-paper mb-3 leading-tight">{title}</h3>
        <p className="font-body text-sm text-dim leading-relaxed">{description}</p>
      </div>

      <div
        className="mt-8 flex items-center gap-2 font-body text-sm font-medium transition-all duration-200 group-hover:gap-3"
        style={{ color: accent }}
      >
        View work
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </div>
    </Link>
  )
}
