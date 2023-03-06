import { FooterAboutUs } from '../footerAboutUs'
import { FooterCopyright } from '../footerCopyright'
import { FooterMethodsOfPayments } from '../footerMethosOfPayments-'
import { FooterNews } from '../footerNews'
import { FooterUsefulInfos } from '../footerUsefulInfos'

import './styles.scss'

export function Footer() {
  return (
    <footer className="container-Footer">
      <div className="allContent-Footer">
        <div className="mainContent-Footer">
          <div className="aboutUs-UsefulInfos-methodOfPayments">
            <div className="aboutUs-UsefulInfos">
              <FooterAboutUs />
              <FooterUsefulInfos />
            </div>
            <FooterMethodsOfPayments />
          </div>
          <FooterNews />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  )
}
