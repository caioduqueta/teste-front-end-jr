import './styles.scss'
import ImageBanner from '../../assets/Banner/Imagebanner.png'

export function Banner() {
  return (
    <div
      className="container-Banner"
      style={{
        background: `linear-gradient(to bottom,rgba(255,255,255, 0.1), rgba(0, 0, 0,  0.7)), url(${ImageBanner})`,
      }}
    >
      <div className="content-Banner">
        <h1 className="title-Banner">
          Venha conhecer nossas <br /> promoções
        </h1>
        <span className="text-Banner">50% Off nos produtos</span>
        <button className="button-Banner">Ver Produto</button>
      </div>
    </div>
  )
}
