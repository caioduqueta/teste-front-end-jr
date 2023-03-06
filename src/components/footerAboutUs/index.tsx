import './styles.scss'

import { ReactComponent as Facebook } from '../../assets/Logos/social/logoFacebook.svg'
import { ReactComponent as Instagram } from '../../assets/Logos/social/logoInstagram.svg'
import { ReactComponent as Youtube } from '../../assets/Logos/social/logoYoutube.svg'

export function FooterAboutUs() {
  return (
    <div className="container-AboutUs">
      <strong className="title-AboutUs">Sobre nós</strong>
      <div className="mainContent-AboutUs">
        <div className="infoLinks-AboutUs">
          <a href="">CONHEÇA</a>
          <a href="">COMO COMPRAR</a>
          <a href="">INDICAÇÃO E DESCONTO</a>
        </div>
        <div className="socialLinks-AboutUs">
          <Facebook title="Facebook" className="icons" />
          <Instagram title="Instagram" className="icons" />
          <Youtube title="Youtube" className="icons" />
        </div>
      </div>
    </div>
  )
}
