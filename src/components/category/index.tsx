import './styles.scss'

import Tecnologia from '../../assets/Categories/Icon-Tecnologia.png'
import Supermercados from '../../assets/Categories/Icon-Supermercado.png'
import Bebidas from '../../assets/Categories/Icon-Bebidas.png'
import Ferramentas from '../../assets/Categories/Icon-Ferramentas.png'
import Saúde from '../../assets/Categories/Icon-Saúde.png'
import Esportes from '../../assets/Categories/Icon-Esportes.png'
import Moda from '../../assets/Categories/Icon-Moda.png'
// import Mercados from '../../assets/Categories/Icon-Mercados.png'
// import Padarias from '../../assets/Categories/Icon-Padarias.png'
// import Oriental from '../../assets/Categories/Icon-Oriental.png'

interface CategoryProps {
  image: string
  name: string
}
export function Category({ image, name }: CategoryProps) {
  function Icons(image: string) {
    switch (image) {
      case 'Tecnologia': {
        return (
          <div className="container-Category">
            <div className="box-Category">
              <img src={Tecnologia} className="icons" alt="Tecnologia" />
            </div>
            <span className="name-Category" style={{ color: 'var(--pink' }}>
              {name}
            </span>
          </div>
        )
      }
      case 'Supermercados': {
        return (
          <div className="container-Category">
            <div className="box-Category">
              <img src={Supermercados} className="icons" alt="Supermercados" />
            </div>
            <span className="name-Category">{name}</span>
          </div>
        )
      }
      case 'Bebidas': {
        return (
          <div className="container-Category">
            <div className="box-Category">
              <img src={Bebidas} className="icons" alt="Bebidas" />
            </div>
            <span className="name-Category">{name}</span>
          </div>
        )
      }
      case 'Ferramentas': {
        return (
          <div className="container-Category">
            <div className="box-Category">
              <img src={Ferramentas} className="icons" alt="Ferramentas" />
            </div>
            <span className="name-Category">{name}</span>
          </div>
        )
      }
      case 'Saúde': {
        return (
          <div className="container-Category">
            <div className="box-Category">
              <img src={Saúde} className="icons" alt="Saúde" />
            </div>
            <span className="name-Category">{name}</span>
          </div>
        )
      }
      case 'Esportes': {
        return (
          <div className="container-Category">
            <div className="box-Category">
              <img src={Esportes} className="icons" alt="Esportes" />
            </div>
            <span className="name-Category">{name}</span>
          </div>
        )
      }
      case 'Moda': {
        return (
          <div className="container-Category">
            <div className="box-Category">
              <img src={Moda} className="icons" alt="Moda" />
            </div>
            <span className="name-Category">{name}</span>
          </div>
        )
      }
      // case 'Mercados': {
      //   return (
      //     <div className="container-Category">
      //       <div className="box-Category">
      //         <img src={Mercados} className="icons" alt="Mercados" />
      //       </div>
      //       <span className="name-Category">{name}</span>
      //     </div>
      //   )
      // }
      // case 'Padarias': {
      //   return (
      //     <div className="container-Category">
      //       <div className="box-Category">
      //         <img src={Padarias} className="icons" alt="Padarias" />
      //       </div>
      //       <span className="name-Category">{name}</span>
      //     </div>
      //   )
      // }
      // case 'Oriental': {
      //   return (
      //     <div className="container-Category">
      //       <div className="box-Category">
      //         <img src={Oriental} className="icons" alt="Oriental" />
      //       </div>
      //       <span className="name-Category">{name}</span>
      //     </div>
      //   )
      // }
    }
  }

  return <>{Icons(image)}</>
}
