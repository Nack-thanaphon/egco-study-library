type ContentSectionProps = {
  number: string
  label: string
  items: string[]
  accent?: boolean
}

export function ContentSection({ number, label, items, accent = false }: ContentSectionProps) {
  return (
    <section className={`content-section ${accent ? 'accent-section' : ''}`}>
      <h2>
        <span className="section-num" aria-hidden="true">{number}</span>
        {label}
      </h2>
      <ol className="note-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </section>
  )
}
