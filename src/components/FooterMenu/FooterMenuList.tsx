import { useState } from 'react'
import { IFooterMenu } from '../../static/footerMenuText'
import { ArrowUpRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { changeDisplay, useWindowDimensions } from '../../utils/utils'

const FooterMenuList = (menuItem: IFooterMenu) => {
  const [isToggleList, setIsToggleList] = useState(false)
  const { width } = useWindowDimensions()

  const widthCheckXS = () => {
    return width < 768
  }

  return (
    <div className="w-3/4 ml-[8%] sm:mx-10">
      <h6
        className="text-sm font-bold mb-6 cursor-pointer relative text-[#4d4d4d] transition-all duration-150 hover:text-[#262626] sm:text-[.625rem] sm:uppercase sm:font-light sm:leading-3 sm:mb-0"
        onClick={() => setIsToggleList(!isToggleList)}
      >
        <span>{menuItem.title}</span>
        {widthCheckXS() && (
          <ChevronDownIcon
            className={`${
              isToggleList ? 'rotate-180' : 'rotate-0'
            } transition-transform duration-200 absolute right-0 top-0 w-6 h-6`}
          />
        )}
      </h6>
      <ul
        className={`${
          widthCheckXS() ? changeDisplay(isToggleList) : 'block pl-0'
        } pl-4 mb-8 pb-2 sm:pl-0 sm:mb-0 sm:pb-0`}
      >
        {menuItem.secondLevel.map(({ title, link, thereIsIcon }) => (
          <li key={title} className="mb-6 sm:mb-2">
            <a
              href={link}
              className="relative pr-5 text-sm font-bold text-[#4d4d4d] transition-all duration-150 hover:text-[#262626]"
            >
              <span>{title}</span>
              {thereIsIcon && (
                <ArrowUpRightIcon className="absolute w-4 h-4 right-0 top-1" />
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterMenuList
