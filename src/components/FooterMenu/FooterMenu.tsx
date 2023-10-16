import React from 'react'
import {
  IFooterMenuSecondLevel,
  footerMenuInfo,
  socialMedia,
} from '../../static/footerMenuText'
import { ArrowUpRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

type Props = {}

const FooterMenu = (props: Props) => {
  return (
    <div className="py-12 bg-[#F6F6F6]">
      <div className="mx-4">
        {footerMenuInfo.map((menuItem) => (
          <div key={menuItem.title} className="w-3/4 ml-[8%] ">
            <h6 className="text-sm font-bold mb-6 cursor-pointer relative text-[#4d4d4d] transition-all duration-150 hover:text-[#262626]">
              <span>{menuItem.title}</span>
              <ChevronDownIcon className="absolute right-0 top-0 w-6 h-6" />
            </h6>
            <ul className="pt-2 pl-4">
              {menuItem.secondLevel.map(({ title, link, thereIsIcon }) => (
                <li key={title} className="mb-6">
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
        ))}
        <div className="ml-[8%] pt-8">
          <ul className="flex gap-3">
            {socialMedia.map(({ image, link }) => (
              <li>
                <a href={link} target="_blank" rel="noreferrer">
                  <img src={image} alt="socialMedia" className="w-7 h-7" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FooterMenu
