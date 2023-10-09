import { useState } from 'react'
import logo from '@/assets/main-page/logo.png'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import {
  ArrowDownCircleIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { menuText } from '../../static/texts'
import NavBarBtn from './NavBarBtn'

type Props = {}

const NavBar = (props: Props) => {
  const [menuIsToggled, setMenuIsToggled] = useState(false)
  const [searchIsClicked, setSearchIsClicked] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const changeDisplay = (element?: HTMLElement) => {
    let displayStyle
    if (element) {
      displayStyle = element?.style.display || 'none'
    } else {
      return (displayStyle = menuIsToggled ? 'block' : 'hidden')
    }

    return (displayStyle = displayStyle === 'none' ? 'block' : 'none')
  }

  const toggleExpression = (toggleElement: boolean) => {
    return !toggleElement
  }

  const changeMenuLayouts = (idSection: string) => {
    idSection = idSection.replace(/\s/g, '')
    const element = document.getElementById(idSection)
    if (!element) {
      return
    }

    element.style.display = changeDisplay(element)
  }

  return (
    <nav className="relative">
      <div
        className={`${
          menuIsToggled ? 'bg-white text-[#666]' : 'bg-black text-white '
        } h-[70px] xl:h-[85px] bg-black px-6 sm:px-[4%]`}
      >
        <div className="flex justify-between h-full xl:border-b xl:border-b-white">
          <div className="flex items-center">
            <a href="#" className="rounded-full">
              <img className="w-9 h-9 rounded-full " src={logo} alt="logo" />
            </a>
            <div className="hidden xl:block h-full ml-6">
              <ul className="h-full flex justify-center items-center">
                {menuText.map(({ firstLevel }, id) => (
                  <li className="h-full" key={firstLevel.name}>
                    <NavBarBtn addClasses="text-base font-bold px-3 flex">
                      {firstLevel.name}
                    </NavBarBtn>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <NavBarBtn addClasses="pl-10 pr-4 flex">
              <MapPinIcon className="absolute w-6 h-6 left-4 top-[50%] translate-y-[-50%]" />
              <span className="text-[0.875rem] w-full font-bold leading-5 ml-1">
                Choose your local BMW Center
              </span>
            </NavBarBtn>
            <NavBarBtn addClasses="hidden sm:flex px-3">
              <UserIcon className="w-6 h-6" />
            </NavBarBtn>
            <button
              className="h-full px-3 xl:hidden"
              onClick={() => setMenuIsToggled(toggleExpression(menuIsToggled))}
            >
              {menuIsToggled ? (
                <XMarkIcon className="w-6 h-6 hover:text-[#191f3f]" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
            <NavBarBtn addClasses="hidden xl:flex px-3">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </NavBarBtn>
          </div>
        </div>
      </div>
      <div
        className={`${changeDisplay()} absolute w-full top-70 bg-white text-[#666] border-t border-[#BBBBBB] z-10`}
      >
        <div className="ml-6 pt-7 max-w-[70%]">
          <ul>
            {menuText.map((link1) => (
              <li key={link1.firstLevel.name}>
                <button
                  className="text-base font-bold py-3 text-left w-full flex justify-between hover:text-[#262626] transition-all duration-150 items-center"
                  onClick={() => {
                    changeMenuLayouts(link1.firstLevel.name)
                  }}
                >
                  <span>{link1.firstLevel.name}</span>
                  {link1.firstLevel.secondLevel && (
                    <ArrowDownCircleIcon className="w-6 h-6 block" />
                  )}
                </button>

                <ul
                  id={`${link1.firstLevel.name.replace(/\s/g, '')}`}
                  className="hidden max-w"
                >
                  {link1.firstLevel.secondLevel?.map((link2, id) => (
                    <li key={link2.name + id} className="ml-5">
                      {link1.firstLevel.type === 'cascade' ? (
                        <>
                          <button
                            className="text-base font-bold py-3 text-left w-full flex justify-between hover:text-[#262626] transition-all duration-150 items-center"
                            onClick={() => {
                              changeMenuLayouts(link2.name)
                            }}
                          >
                            <span className="flex gap-3">
                              {link2.name}
                              {link2.image && (
                                <img
                                  src={link2.image}
                                  alt="menu-img"
                                  className="h-4"
                                />
                              )}
                            </span>
                            {link1.firstLevel.secondLevel && (
                              <ArrowDownCircleIcon className="w-5 h-5 block" />
                            )}
                          </button>
                          <ul
                            id={`${link2.name.replace(/\s/g, '')}`}
                            className="hidden max-w"
                          >
                            {link2.thirdLevel?.map((link3) => (
                              <li
                                key={link3.name + id}
                                className="relative after:absolute after:content-[''] after:w-full after:h-[1px] after:bg-[#BBBBBB] after:bottom-0"
                              >
                                <a
                                  href={link3.link}
                                  className="flex items-center py-5"
                                >
                                  <picture className="max-w-[67%]">
                                    <img
                                      src={link3.image}
                                      alt="bmw-img"
                                      className="w-full"
                                    />
                                  </picture>
                                  {link3.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <button className="text-[#262626] text-sm font-bold mb-[14px] text-left w-full flex justify-between hover:text-[#1c69d4] transition-all duration-150">
                          <span>{link2.name}</span>
                        </button>
                      )}
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
