import { useState } from 'react'
import logo from '@/assets/main-page/logo.png'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { MapPinIcon } from '@heroicons/react/24/outline'

type Props = {}

const NavBar = (props: Props) => {
  const [menuIsToggled, setMenuIsToggled] = useState(false)
  return (
    <nav>
      <div className="bg-white text-[#666]">
        <div className="h-[70px] px-6 border-b border-[#BBBBBB] flex  justify-between">
          <div className="flex items-center">
            <a href="#" className="rounded-full">
              <img className="w-9 h-9 rounded-full " src={logo} alt="logo" />
            </a>
          </div>

          <div className="flex items-center pr-4">
            <button className="relative pl-10 pr-4 h-full transition hover:before:content-[''] hover:before:bottom-0 hover:before:left-0 hover:before:absolute hover:before:w-full hover:before:h-[3px] hover:before:bg-[#1C69D4] flex flex-col justify-center">
              <MapPinIcon className="absolute w-6 h-6 left-4 top-[50%] translate-y-[-50%]" />
              <span className="text-[0.875rem] w-full font-bold leading-5 ml-1">
                Choose your local BMW Center
              </span>
            </button>
            <button className="w-6 h-6 ml-3">
              <XMarkIcon className="w-6 h-6 hover:text-[#191f3f]" />
            </button>
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
