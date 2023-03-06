import './styles.scss'

export function FooterNews() {
  return (
    <div className="container-News">
      <div className="content-News">
        <span className="title-News">
          CADASTRE-SE E RECEBA NOSSAS <br />
          <strong>NOVIDADES E PROMOÇÕES</strong>
        </span>
        <div className="text-News">
          <span>
            Excepteur sint occaecat cudatat non ent, sunt in
            <br /> culpa qui officia lorem ipsum
          </span>
        </div>
        <form className="form-News">
          <input type="text" className="input-News" placeholder="SEU E-MAIL" />
          <button className="button-news">Ok</button>
        </form>
      </div>
    </div>
  )
}
