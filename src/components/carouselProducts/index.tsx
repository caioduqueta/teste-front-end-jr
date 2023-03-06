import './styles.scss'

import ArrowLeft from '../../assets/Arrows/Arrow-Left.png'
import ArrowRight from '../../assets/Arrows/Arrow-Right.png'
import { Products } from '../products'

import { useEffect, useState, useRef, MouseEvent } from 'react'

interface IProducts {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

export function CarouselProducts() {
  const [products, setProducts] = useState<IProducts[]>([])
  const carousel = useRef<HTMLDivElement>(null)

  async function getProducts() {
    const response = await fetch(
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json',
    )
    const { success, products } = await response.json()
    if (success === true) {
      setProducts(products)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  function handleLeftClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (carousel.current != null) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth
    }
  }
  function handleRightClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (carousel.current != null) {
      carousel.current.scrollLeft += carousel.current.offsetWidth
    }
  }

  return (
    <div className="carousel">
      <button className="arrows" onClick={handleLeftClick}>
        <img src={ArrowLeft} alt="Scroll Left" />
      </button>
      <div className="carousel-Products" ref={carousel}>
        {products.map((product) => {
          return (
            <Products
              key={product.productName}
              productName={product.productName}
              description={product.descriptionShort}
              photo={product.photo}
              price={product.price}
            />
          )
        })}
      </div>
      <button className="arrows" onClick={handleRightClick}>
        <img src={ArrowRight} alt="Scroll Right" />
      </button>
    </div>
  )
}
