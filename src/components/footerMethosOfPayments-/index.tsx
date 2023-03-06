import './styles.scss'

import { ReactComponent as Visa } from '../../assets/MethodsOfPayments/logoVisa.svg'
import { ReactComponent as Elo } from '../../assets/MethodsOfPayments/logoElo.svg'
import { ReactComponent as Alelo } from '../../assets/MethodsOfPayments/logoAlelo.svg'
import { ReactComponent as DinnersClub } from '../../assets/MethodsOfPayments/logoDinnersClub.svg'
import { ReactComponent as Ifood } from '../../assets/MethodsOfPayments/logoIfood.svg'
import { ReactComponent as MasterCard } from '../../assets/MethodsOfPayments/logoMasterCard.svg'
import { ReactComponent as Pix } from '../../assets/MethodsOfPayments/logoPix.svg'
import { ReactComponent as Amex } from '../../assets/MethodsOfPayments/logoAmex.svg'
import { ReactComponent as Ticket } from '../../assets/MethodsOfPayments/logoTicket.svg'
import { ReactComponent as Sodexo } from '../../assets/MethodsOfPayments/logoSodexo.svg'

export function FooterMethodsOfPayments() {
  return (
    <div className="container-MethodsOfPayments">
      <strong className="title-MethodsOfPayments">Formas de Pagamento</strong>
      <div className="content-MethodsOfPayments">
        <div className="methodsOfPayments">
          <Visa />
          <DinnersClub />
          <Pix />
          <Sodexo />
        </div>
        <div className="methodsOfPayments">
          <Elo />
          <Ifood />
          <Amex />
        </div>
        <div className="methodsOfPayments">
          <Alelo />
          <MasterCard />
          <Ticket />
        </div>
        <div className="methodsOfPayments"></div>
      </div>
    </div>
  )
}
