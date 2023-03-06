import { TitlesWithLines } from '../titlesWithLines'
import { RelatedProductsNavigation } from '../relatedProductsNavigation'
import { TextBelowRelatedProducts } from '../textBelowRelatedProducts'
import { CarouselProducts } from '../carouselProducts'

import './styles.scss'

type RelatedProductProps = {
  variantType: 'PRIMARY' | 'SECONDARY'
}

export function RelatedProducts({ variantType }: RelatedProductProps) {
  function Types(variantType: string) {
    switch (variantType) {
      case 'PRIMARY': {
        return (
          <div className="container-RelatedProducts">
            <TitlesWithLines title="Produtos Relacionados" />
            <RelatedProductsNavigation />
            <CarouselProducts />
          </div>
        )
      }

      case 'SECONDARY': {
        return (
          <div className="container-RelatedProducts">
            <TitlesWithLines title="Produtos Relacionados" />
            <TextBelowRelatedProducts />
            <CarouselProducts />
          </div>
        )
      }
    }
  }
  return <> {Types(variantType)}</>
}
