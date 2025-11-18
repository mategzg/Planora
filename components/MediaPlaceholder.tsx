export function MediaPlaceholder({
  label,
  aspect = 'aspect-[16/9]',
  className = '',
}: {
  label: string
  aspect?: string
  className?: string
}) {
  return (
    <div
      className={`${aspect} relative overflow-hidden rounded-2xl border border-accent/40 bg-soft shadow-inner ${className}`.trim()}
      aria-label={label}
    >
      <div className="absolute inset-0 grid place-items-center text-sm font-semibold text-muted">
        <span className="rounded-full bg-white/80 px-3 py-1 text-ink shadow">{label}</span>
      </div>
    </div>
  )
}

