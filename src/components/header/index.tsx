import { HeaderStoreInfos } from '../headerStoreInfos'
import { HeaderMainArea } from '../headerMainArea'
import { HeaderNavigation } from '../headerNavigation'

import './styles.scss'

export function Header() {
  return (
    <header>
      <div className="content-Header">
        <HeaderStoreInfos />
        <HeaderMainArea />
        <HeaderNavigation />
      </div>
    </header>
  )
}
