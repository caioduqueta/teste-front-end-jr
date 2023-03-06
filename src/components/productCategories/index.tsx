import { Category } from '../category'
import './styles.scss'

export function ProductCategories() {
  return (
    <div className="container-ProductCategories">
      <Category image="Tecnologia" name="Tecnologia" />
      <Category image="Supermercados" name="Supermercado" />
      <Category image="Bebidas" name="Bebidas" />
      <Category image="Ferramentas" name="Ferramentas" />
      <Category image="Saúde" name="Saúde" />
      <Category image="Esportes" name="Esportes e Fitness" />
      <Category image="Moda" name="Moda" />
    </div>
  )
}

/* <Category image="Mercados" name="Mercados" />
      <Category image="Padarias" name="Padarias" />
      <Category image="Oriental" name="Oriental" /> */
