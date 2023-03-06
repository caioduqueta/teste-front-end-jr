import './styles.scss'

import ImageBox from '../../assets/Boxes/Box-Background.png'
import ImageBox2 from '../../assets/Boxes/Box-Background2.png'

type BoxProps = {
  variantType: 'PRIMARY' | 'SECONDARY'
  title: string
}

export function Box({ variantType, title }: BoxProps) {
  const stylePrimary = {
    background: `linear-gradient(to bottom,rgba(255,255,255, 0.1), rgba(0, 0, 0,  0.7)), url(${ImageBox})`,
    width: '35.875rem',
    height: '21.875rem',
    borderRadius: '20px',
    marginTop: '4.4375rem',
  }

  const styleSecundary = {
    background: `linear-gradient(to bottom,rgba(250,250,250, 0.1), rgba(0, 0, 0,  0.9)), url(${ImageBox2})`,
    width: '36.875rem',
    height: '17.75rem',
    borderRadius: '10px',
    marginTop: '4.3125rem',
  }

  function Types(variantType: string) {
    switch (variantType) {
      case 'PRIMARY': {
        return (
          <div className="container-Box1" style={stylePrimary}>
            <div className="content-Box1">
              <strong className="title-Box1">{title}</strong>
              <p className="description-Box1">
                Lorem ipsum dolor sit <br></br> amet, consectetur
              </p>
              <button className="button-Box1">Confira</button>
            </div>
          </div>
        )
      }

      case 'SECONDARY': {
        return (
          <div className="container-Box2" style={styleSecundary}>
            <div className="content-Box2">
              <strong className="title-Box2">{title}</strong>
              <p className="description-Box2">
                Lorem ipsum dolor sit <br></br> amet, consectetur
              </p>
              <button className="button-Box2">Confira</button>
            </div>
          </div>
        )
      }
    }
  }

  return <> {Types(variantType)}</>
}
