import { CreditCard, ShieldCheck, Truck } from 'phosphor-react'
import './styles.scss'

export function HeaderStoreInfos() {
  return (
    <div className="container-StoreInfos">
      <div className="infos">
        <ShieldCheck size={20} weight="bold" />
        <span>
          Compra <strong>100% segura</strong>
        </span>
      </div>
      <div className="infos">
        <Truck size={20} weight="bold" />
        <span>
          <strong>Frete grátis</strong> acima de R$ 200
        </span>
      </div>
      <div className="infos">
        <CreditCard size={20} weight="bold" />
        <span>
          <strong>Parcele</strong> suas compras
        </span>
      </div>
    </div>
  )
}
