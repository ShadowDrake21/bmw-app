import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useWindowDimensions } from '../../utils/utils'
import { useState } from 'react'

const xlLinks = [
  { title: 'overview' },
  { title: 'models & features' },
  { title: 'build your own' },
]

const VehicleAddNavBar = ({ isTopOfPage, title, link }: any) => {
  const [xlLinkClick, setXlLinkClick] = useState<Number>(0)

  const { width } = useWindowDimensions()
  const widthCheckXL = () => {
    return width < 1280
  }
  return (
    <div
      className={`${
        isTopOfPage
          ? 'absolute border-t border-[hsla(0,0%,79.2%,.7)] top-[70px] xl:border-none xl:top-[84px]'
          : 'fixed top-70px bg-[#f6f6f6] border-[#cacaca] border-b'
      } w-full transition-all z-[18]`}
    >
      <div className="py-[14px] px-[4%]">
        <div className="flex justify-between xl:items-center">
          <div className="font-bold cursor-pointer">
            <span
              className={`${
                isTopOfPage ? 'text-[#f6f6f6]' : 'text-[#221f1f]'
              } text-sm tracking-[0.25px] sm:text-[15px] sm:leading-[18px]`}
            >
              {title}
            </span>
            {widthCheckXL() && (
              <div
                className={`${
                  isTopOfPage ? 'text-[#cacaca]' : 'text-[#4c4c4c]'
                } relative pt-[5px] text-xs tracking-[.25px] pr-4 sm:text-[13px] sm:leading-4`}
              >
                <span>Overview</span>
                <ChevronDownIcon className="absolute w-[10px] right-0 top-[10px]" />
              </div>
            )}
          </div>
          <div className="hidden xl:block">
            <ul className="flex gap-10">
              {xlLinks.map((xlLink, index) => (
                <li
                  key={index}
                  className={`${
                    xlLinkClick === index && isTopOfPage
                      ? 'text-[#f6f6f6] relative pb-2 after:absolute after:w-full after:h-[3px] after:content-[""] after:bg-[#f6f6f6] after:bottom-0 after:left-0'
                      : `${
                          xlLinkClick === index && !isTopOfPage
                            ? 'text-[#1c69d3] relative pb-2 after:absolute after:w-full after:h-[3px] after:content-[""] after:bg-[#1c69d3] after:bottom-0 after:left-0'
                            : `${
                                xlLinkClick !== index && isTopOfPage
                                  ? 'text-[#cacaca] hover:text-white'
                                  : `${
                                      xlLinkClick !== index &&
                                      !isTopOfPage &&
                                      'text-[#221f1f] hover:text-[#1c69d3]'
                                    } `
                              } `
                        } `
                  } transition-colors duration-300`}
                  onClick={() => setXlLinkClick(index)}
                >
                  <a
                    href={`${index !== 1 ? '#' : link}`}
                    className={`${xlLinkClick === index && 'pb-3'} ${
                      index === 1 && 'pr-4'
                    } relative h-full`}
                  >
                    <span className="text-[13px] leading-4 tracking-[.25px] capitalize">
                      {xlLink.title}
                    </span>
                    {index === 1 && (
                      <ChevronDownIcon className="absolute w-[10px] right-0 top-[7px]" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${isTopOfPage ? 'mr-4' : 'mr-0'}`}>
            <a
              href={link}
              className={`${
                isTopOfPage
                  ? 'bg-white hover:bg-[#ebebeb]'
                  : 'bg-[#221f1f] hover:bg-[#4c4c4c]'
              } inline-block py-[10px] px-[25px]  rounded-[2px] transition-all duration-100`}
            >
              <span
                className={`${
                  isTopOfPage ? 'hover:text-[#4c4c4c]' : 'text-white'
                } capitalize text-[13px] leading-4 font-bold tracking-[.5px] `}
              >
                Contact dealer
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VehicleAddNavBar
