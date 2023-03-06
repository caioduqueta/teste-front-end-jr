import { useState } from 'react'
import { priceFormatter } from '../../utils/formatter'
import { Modal } from '../modal'
import './styles.scss'

interface ProductsProps {
  productName: string
  description: string
  photo: string
  price: number
}

export function Products({
  productName,
  description,
  photo,
  price,
}: ProductsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleOpenModal() {
    setIsModalOpen(true)
  }
  function handleCloseModal() {
    setIsModalOpen(false)
  }

  return (
    <div className="container-Products">
      <div className="content-Products">
        <img className="products-Image" src={photo} alt="" />
        <p className="products-Name">{productName}</p>
        <div className="products-Prices">
          <span className="oldPrice">{'R$30,00'}</span>
          <span className="realPrice">{priceFormatter.format(price)}</span>
          <span className="methodOfPayment">
            {'ou 2x de R$ 49,95 sem juros'}
          </span>
        </div>
        <span className="freeShipping">Frete Grátis</span>
        <button className="buy" onClick={handleOpenModal}>
          COMPRAR
        </button>
        {isModalOpen === true ? (
          <Modal
            infos={{ productName, description, photo, price }}
            handleCloseModal={handleCloseModal}
          />
        ) : null}
      </div>
    </div>
  )
}
