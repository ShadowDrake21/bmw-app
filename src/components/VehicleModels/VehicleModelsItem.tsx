import React, { useState } from 'react'
import { IVehicleModels } from '../../static/vehicleModels'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

const VehicleModelsItem = (vehicleModelItem: IVehicleModels) => {
  const {
    highImage,
    highText,
    carPhoto,
    carHoverPhoto,
    name,
    price,
    mainLink,
    secondaryLink,
  } = vehicleModelItem

  const [isModelHover, setIsModelHover] = useState<boolean>(false)
  return (
    <div>
      <a
        href={mainLink}
        className="inline-block max-w-[500px] w-[70%] relative text-[#221f1f]"
      >
        <div
          onMouseEnter={() => setIsModelHover(true)}
          onMouseLeave={() => setIsModelHover(false)}
        >
          <div className="absolute flex items-center gap-[5px] left-1/2 -translate-x-1/2">
            <img src={highImage} alt="icon" className="w-4" />
            <span className="text-[10px] leading-[13px] tracking-[2px] font-normal uppercase">
              {highText}
            </span>
          </div>
          <div className="w-full mt-[5px]">
            {!isModelHover ? (
              <img src={carPhoto} alt="car" className="max-w-[500px] w-full" />
            ) : (
              <img
                src={carHoverPhoto}
                alt="car hover"
                className="max-w-[500px] w-full"
              />
            )}
          </div>
          <div className="text-center pb-3">
            <div className="text-base leading-5 tracking-[-0.1px] font-bold flex justify-center mb-[5px]">
              <h3>{name}</h3>
              <ChevronRightIcon className="w-5 text-[#1c69d3]" />
            </div>
            <div className="flex justify-center items-center gap-[2px] text-xs tracking-[.25px] font-normal cursor-text">
              <span>{price}</span>
              <QuestionMarkCircleIcon className="w-[14px] cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            href={secondaryLink}
            className="text-xs tracking-[0.25px] font-bold capitalize border-b border-[#4c4c4c] transition-colors duration-150 hover:text-[#1c69d3]"
          >
            see full specifications
          </a>
        </div>
      </a>
    </div>
  )
}

export default VehicleModelsItem
