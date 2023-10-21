import { ChevronDownIcon } from '@heroicons/react/24/solid'

const VehicleAddNavBar = ({ isTopOfPage, title, link }: any) => {
  return (
    <div
      className={`${
        isTopOfPage
          ? 'absolute border-t border-[hsla(0,0%,79.2%,.7)] top-[70px]'
          : 'fixed top-70px bg-[#f6f6f6] border-[#cacaca] border-b'
      } w-full transition-[top_0.4s_ease_0s] z-50`}
    >
      <div className="py-[14px] px-[4%]">
        <div className="flex justify-between">
          <div className="font-bold cursor-pointer">
            <span
              className={`${isTopOfPage ? 'text-[#f6f6f6]' : 'text-[#221f1f]'}`}
            >
              {title}
            </span>
            <div
              className={`${
                isTopOfPage ? 'text-[#cacaca]' : 'text-[#4c4c4c]'
              } relative pt-[5px] text-xs tracking-[.25px] pr-4`}
            >
              <span>Overview</span>
              <ChevronDownIcon className="absolute w-[10px] right-0 top-[10px]" />
            </div>
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
