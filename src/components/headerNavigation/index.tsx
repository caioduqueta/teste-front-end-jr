import { CrownSimple } from 'phosphor-react'
import './styles.scss'

export function HeaderNavigation() {
  return (
    <nav>
      <span>TODAS AS CATEGORIAS</span>
      <span>SUPERMERCADO</span>
      <span>LIVROS</span>
      <span>MODA</span>
      <span>LANÇAMENTOS</span>
      <span>OFERTAS DO DIA</span>
      <span>
        <CrownSimple size={20} weight="regular" />
        ASSINATURA
      </span>
    </nav>
  )
}
