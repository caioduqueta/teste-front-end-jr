import { CaretLeft, CaretRight } from 'phosphor-react'
import { useRef, MouseEvent } from 'react'
import { Brands } from '../brands'
import { Titles } from '../titles'
import './styles.scss'

export function BrandSections() {
  const carousel2 = useRef<HTMLDivElement>(null)

  function handleLeftClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (carousel2.current != null) {
      carousel2.current.scrollLeft -= carousel2.current.offsetWidth
    }
  }
  function handleRightClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (carousel2.current != null) {
      carousel2.current.scrollLeft += carousel2.current.offsetWidth
    }
  }

  return (
    <div className="container-BrandSections">
      <Titles title="Navegue por marcas" />
      <div className="carousel2">
        <button className="arrowsLeft" onClick={handleLeftClick}>
          <CaretLeft size={23} />
        </button>
        <div className="carousel-Brands" ref={carousel2}>
          <Brands name="Vtex" />
          <Brands name="Vtex" />
          <Brands name="Vtex" />
          <Brands name="Vtex" />
          <Brands name="Vtex" />
          <Brands name="McCain" />
          <Brands name="Camil" />
          <Brands name="Adoro" />
          <Brands name="Grano" />
        </div>
        <button className="arrowsRight" onClick={handleRightClick}>
          <CaretRight size={23} />
        </button>
      </div>
    </div>
  )
}
