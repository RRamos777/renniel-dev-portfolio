export function Section({ id, title, children }) {
  return (
    <section id={id} aria-label={title} className="scroll-mt-6 pt-14 lg:mb-28 lg:scroll-mt-24 lg:pt-0">
      <h2 className="sticky top-0 z-20 -mx-6 mb-5 bg-ink/80 px-6 py-4 text-xs font-bold tracking-[0.12em] text-strong uppercase backdrop-blur lg:sr-only">
        {title}
      </h2>
      {children}
    </section>
  )
}

export function Tags({ items }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
      {items.map((t) => (
        <li key={t} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          {t}
        </li>
      ))}
    </ul>
  )
}

export function Card({ label, title, text, tags }) {
  return (
    <li className="group grid gap-1 rounded-lg py-4 transition lg:-mx-6 lg:grid-cols-[168px_1fr] lg:gap-4 lg:px-6 lg:py-5 lg:hover:bg-slate-400/5 lg:group-hover/list:opacity-55 lg:hover:opacity-100!">
      <p className="pt-0.5 text-xs font-semibold tracking-wider text-muted uppercase tabular-nums">{label}</p>
      <div>
        <h3 className="leading-snug font-semibold text-strong transition-colors lg:group-hover:text-accent">{title}</h3>
        <p className="mt-2 text-[0.94rem]">{text}</p>
        <Tags items={tags} />
      </div>
    </li>
  )
}
