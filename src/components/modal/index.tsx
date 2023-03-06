import { priceFormatter } from '../../utils/formatter'
import './styles.scss'
import { X } from 'phosphor-react'

interface ModalProps {
  infos: {
    productName: string
    description: string
    photo: string
    price: number
  }
  handleCloseModal: () => void
}

export function Modal({ infos, handleCloseModal }: ModalProps) {
  function CloseModal() {
    handleCloseModal()
  }
  return (
    <div className="container-Modal">
      <div className="content-Modal">
        <img className="modal-ProductImage" src={infos.photo} alt="" />
        <div className="modal-ProductInfo">
          <span className="product-Name">{infos.productName}</span>
          <span className="product-Price">
            {priceFormatter.format(infos.price)}
          </span>
          <p className="product-Description">{infos.description}</p>
          <span className="product-More">
            Veja mais detalhes do produto &gt;
          </span>
        </div>
        <button className="closeModal" onClick={CloseModal}>
          <X size={20} />
        </button>
      </div>
    </div>
  )
}
