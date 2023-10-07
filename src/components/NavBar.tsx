import { useState } from 'react'
import logo from '@/assets/main-page/logo.png'
import { ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { menuText } from '../static/texts'

type Props = {}

const NavBar = (props: Props) => {
  const [menuIsToggled, setMenuIsToggled] = useState(false)
  const [searchIsClicked, setSearchIsClicked] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  console.log(menuText)

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
        <div className="ml-6 pt-7 max-w-[70%]">
          <ul>
            {menuText.map((link1) => (
              <li>
                <button className="text-base font-bold py-3 text-left w-full flex justify-between">
                  <span>{link1.firstLevel.name}</span>
                  <ChevronRightIcon className="w-6 h-6" />
                </button>

                <ul className="hidden">
                  {link1.firstLevel.secondLevel?.map((link2) => (
                    <li className="ml-5">
                      {link2.name} {link2.image && <img src={link2.image} />}
                      <ul>
                        {link2.thirdLevel?.map((link3) => (
                          <li className="ml-5">{link3.name}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className={`${!searchIsClicked && 'pl-6'} flex pt-8 `}>
            <div
              className={`${
                searchIsClicked ? 'w-full' : 'w-[200px]'
              } relative min-w-[200px]`}
            >
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-5 top-[50%] -translate-y-[50%]" />
              <input
                type="search"
                className="w-full border-solid border-[#bbb] border text-base leading-5 font-normal tracking-[.4px] pt-[2px] pl-[50px] h-11 rounded outline-none focus:border-2 focus:border-black"
                placeholder="Search"
                value={searchTerm}
                onClick={() => setSearchIsClicked(true)}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              className={`${
                searchIsClicked ? 'block' : 'hidden'
              } text-xs font-bold tracking-[.25px] text-black pl-3`}
              onClick={() => {
                setSearchIsClicked(false)
                setSearchTerm('')
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
