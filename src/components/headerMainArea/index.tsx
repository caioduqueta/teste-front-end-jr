import './styles.scss'
import LogoVtex from '../../assets/Logos/logoVtex.png'
import box from '../../assets/Icon-Header/boxIcon.png'
import {
  Heart,
  MagnifyingGlass,
  ShoppingCart,
  UserCircle,
} from 'phosphor-react'

export function HeaderMainArea() {
  return (
    <div className="container-HeaderMainArea">
      <img className="logo" src={LogoVtex} alt="Vtex" />

      <div className="formAndIcons">
        <form role="search" className="search-Field">
          <input
            className="search-Input"
            type="text"
            placeholder="O que você está buscando?"
          />
          <button className="search-Button" type="submit">
            <MagnifyingGlass size={28} weight="regular" />
          </button>
        </form>

        <div className="icons-Header">
          <div className="icon_">
            <img className="box" src={box} alt="seu pacote" />
          </div>
          <div className="icon_">
            <Heart size={32} weight="regular" />
          </div>
          <div className="icon_">
            <UserCircle size={32} weight="regular" />
          </div>
          <div className="icon_">
            <ShoppingCart size={32} weight="regular" />
          </div>
        </div>
      </div>
    </div>
  )
}
