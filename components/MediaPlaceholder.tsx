import type { LucideIcon } from 'lucide-react'
import { FileText, Image as ImageIcon, Play } from 'lucide-react'

type MediaPlaceholderProps = {
  label: string
  aspect?: string
  className?: string
  icon?: 'plan' | 'image' | 'video'
}

const icons: Record<string, LucideIcon> = {
  plan: FileText,
  image: ImageIcon,
  video: Play,
}

export function MediaPlaceholder({ label, aspect = 'aspect-[16/9]', className = '', icon = 'image' }: MediaPlaceholderProps) {
  const Icon = icons[icon] ?? FileText

  return (
    <div
      className={`${aspect} relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-ink via-slate-900 to-ink shadow-inner ${className}`.trim()}
      aria-label={label}
    >
      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(23,195,206,0.35),transparent_60%)]" />
      </div>
      <div className="relative flex h-full flex-col justify-between p-5 text-paper">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-white/15 p-2 text-accent">
            <Icon className="h-5 w-5" />
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Preview asset</p>
        </div>
        <p className="text-sm font-semibold text-white/90">{label}</p>
      </div>
    </div>
  )
}