type MediaPlaceholderProps = {
  label: string
  aspect?: string
  className?: string
  icon?: 'plan' | 'image' | 'video'
}

const symbolMap: Record<string, string> = {
  plan: '📄',
  image: '🖼',
  video: '▶',
}

export function MediaPlaceholder({ label, aspect = 'aspect-video', className = '', icon = 'image' }: MediaPlaceholderProps) {
  const symbol = symbolMap[icon] ?? symbolMap.plan

  return (
    <div
      className={`${aspect} relative overflow-hidden rounded-2xl border border-accent/10 bg-gradient-to-br from-soft via-soft to-accent/5 ${className}`.trim()}
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(#17C3CE 1px, transparent 1px), linear-gradient(90deg, #17C3CE 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative flex h-full flex-col items-center justify-center p-6 text-center transition-all duration-300">
        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-accent/20 bg-white/80 text-3xl">
          {symbol}
        </div>
        <p className="text-sm font-medium text-muted">{label}</p>
      </div>
    </div>
  )
}
