import './styles.scss'

import EconverseLogo from '../../assets/Logos/logoEconverse.png'
import VtexLogo from '../../assets/Logos/logoVtexBranco.png'

export function FooterCopyright() {
  return (
    <div className="container-FooterCopyright">
      <div className="content-FooterCopyright">
        <p className="text-FooterCopyright">
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
          imagens são de propriedade de seus respectivos donos. <br /> É vedada
          a reprodução, total ou parcial, de qualquer conteúdo sem expressa
          autorização.
        </p>
        <div className="logos-FooterCopyright">
          <img className="socialLogo" src={EconverseLogo} alt="Econverse" />
          <img className="socialLogo" src={VtexLogo} alt="Vtex" />
        </div>
      </div>
    </div>
  )
}
