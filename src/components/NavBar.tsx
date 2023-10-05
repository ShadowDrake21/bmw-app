import { useState } from 'react'
import logo from '@/assets/main-page/logo.png'

type Props = {}

const NavBar = (props: Props) => {
  const [menuIsToggled, setMenuIsToggled] = useState(false)
  return (
    <nav>
      <div>
        <div>
          <a href="#">
            <img src={logo} alt="" />
          </a>
          <div>
            <span></span>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <ul></ul>
          <div>
            <input type="search" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
