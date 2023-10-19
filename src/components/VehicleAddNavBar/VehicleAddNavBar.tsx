import React from 'react'

type Props = {}

const VehicleAddNavBar = ({ title, link }: any) => {
  return (
    <div className="absolute w-full border-t border-[hsla(0,0%,79.2%,.7)] top-[70px] z-50">
      <div className="py-[14px] px-[4%]">
        <div className="flex justify-between">
          <p>
            <span className="text-[#f6f6f6]">{title}</span>
            <div className="pt-[5px] text-[#cacaca] text-xs tracking-[.25px]">
              Overview
            </div>
          </p>

          <div className="mr-4">
            <a
              href={link}
              className="inline-block py-[10px] px-[25px] bg-white rounded-[2px] transition-all duration-100 hover:bg-[#ebebeb]"
            >
              <span className="capitalize text-[13px] leading-4 font-bold tracking-[.5px] hover:text-[#4c4c4c]">
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
