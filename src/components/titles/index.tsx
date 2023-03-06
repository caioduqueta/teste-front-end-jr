import './styles.scss'

interface TitleProps {
  title: string
}

export function Titles({ title }: TitleProps) {
  return (
    <div className="container-Titles">
      <h2>{title}</h2>
    </div>
  )
}
