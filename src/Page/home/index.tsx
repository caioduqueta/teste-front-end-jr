import { Header } from '../../components/header'
import { Banner } from '../../components/banner'
import { ProductCategories } from '../../components/productCategories'
import { RelatedProducts } from '../../components/relatedProducts'
import { BoxesSectionPartners } from '../../components/boxesSectionPartners'
import { BoxesSectionProducts } from '../../components/boxesSectionProducts'
import { BrandSections } from '../../components/brandSection'
import { Footer } from '../../components/footer'

import './styles.scss'

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <ProductCategories />
        <RelatedProducts variantType="PRIMARY" />
        <BoxesSectionPartners />
        <RelatedProducts variantType="SECONDARY" />
        <BoxesSectionProducts />
        <BrandSections />
        <RelatedProducts variantType="SECONDARY" />
      </main>
      <Footer />
    </>
  )
}
