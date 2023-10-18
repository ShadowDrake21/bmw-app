import React from 'react'
import { footerInfo } from '../../static/footerText'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="py-8">
      <div className="mx-5 pb-8 sm:mx-9 xl:mx-[5.25rem]">
        <div className="pt-8 pb-4 sm:pt-0">
          <ul className="flex flex-wrap justify-center">
            {footerInfo.map((footerItem, index) => (
              <li
                key={index}
                className="mx-[0.375rem] mb-3 sm:ml-0 sm:mr-8 last:mr-0"
              >
                <a
                  href={footerItem.link}
                  className={`${
                    footerItem.thereIsIcon && 'pr-5'
                  } relative text-sm font-bold text-[#262626] transition-all duration-150 hover:text-[#1c69d4]`}
                >
                  <span>{footerItem.title}</span>
                  {footerItem.thereIsIcon && (
                    <ArrowUpRightIcon className="absolute w-4 h-4 right-0 top-0" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs font-light text-[#262626]">
          © 2023 BMW of North America, LLC. The BMW name, BMW logo, model names,
          and other trademarks are trademarks of BMW AG.
        </p>
      </div>
    </footer>
  )
}

export default Footer
