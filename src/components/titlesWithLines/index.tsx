import './styles.scss'

interface TitleWithLinesProps {
  title: string
}

export function TitlesWithLines({ title }: TitleWithLinesProps) {
  return (
    <div className="container-TitlesWithLines">
      <h2>{title}</h2>
    </div>
  )
}
