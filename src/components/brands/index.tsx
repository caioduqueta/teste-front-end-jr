import './styles.scss'

import LogoVtex from '../../assets/Logos/logoVtexBrands.png'
import LogoMcCain from '../../assets/Logos/logoMcCain.png'
import LogoCamil from '../../assets/Logos/logoCamil.png'
import LogoAdoro from '../../assets/Logos/logoAdoro.png'
import LogoGrano from '../../assets/Logos/logoGrano.png'

interface BrandsProps {
  name: string
}

export function Brands({ name }: BrandsProps) {
  function BrandsLogo(name: string) {
    switch (name) {
      case 'Vtex': {
        return (
          <div className="container-Brands">
            <img className="logo-Brands" src={LogoVtex} alt={name} />
          </div>
        )
      }
      case 'McCain': {
        return (
          <div className="container-Brands">
            <img className="logo-Brands" src={LogoMcCain} alt={name} />
          </div>
        )
      }
      case 'Camil': {
        return (
          <div className="container-Brands">
            <img className="logo-Brands" src={LogoCamil} alt={name} />
          </div>
        )
      }
      case 'Adoro': {
        return (
          <div className="container-Brands">
            <img className="logo-Brands" src={LogoAdoro} alt={name} />
          </div>
        )
      }
      case 'Grano': {
        return (
          <div className="container-Brands">
            <img className="logo-Brands" src={LogoGrano} alt={name} />
          </div>
        )
      }
    }
  }

  return <> {BrandsLogo(name)} </>
}
