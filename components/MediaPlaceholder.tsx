type MediaPlaceholderProps = {
  label: string
  aspect?: string
  className?: string
  icon?: 'plan' | 'image' | 'video'
}

const symbol = '◆'

export function MediaPlaceholder({ label, aspect = 'aspect-video', className = '' }: MediaPlaceholderProps) {
  return (
    <div
      className={`${aspect} relative overflow-hidden rounded-2xl border border-accent/10 bg-gradient-to-br from-soft via-soft to-accent/10 ${className}`.trim()}
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(#17C3CE 1px, transparent 1px), linear-gradient(90deg, #17C3CE 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-accent/15 bg-white/80 text-3xl">
          {symbol}
        </div>
        <p className="text-sm font-medium text-muted">{label}</p>
      </div>
    </div>
  )
}
