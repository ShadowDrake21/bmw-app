import React from 'react'
import { IOwnership } from '../../static/ownershipText'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

type Props = {}

const OwnershipItem = (ownership: IOwnership) => {
  return (
    <div>
      <div className="text-center">
        <div className="flex justify-center mb-3 xl:mb-6">
          <img
            src={ownership.image}
            alt={ownership.title}
            className="w-[75px] xl:w-[55px]"
          />
        </div>
        <h5 className="text-base pb-2 leading-5 font-bold tracking-[-0.1px] sm:text-lg sm:leading-[22px] sm:pb-3 xl:text-xl xl:leading-6">
          {ownership.title}
        </h5>
        <p className="text-[#221f1f] tracking-[.5px] text-sm font-normal pb-2 sm:text-[15px] sm:leading-6 xl:text-base xl:leading-[26px]">
          {ownership.description}
        </p>
        <div>
          <a
            href={ownership.link}
            className="pb-[2px] pr-4 max-w-fit relative after:content-[''] after:w-[87%] after:h-[1px] after:absolute after:bottom-0 after:left-0 after:bg-[#221f1f] transition-all duration-200 text-[#221f1f] hover:text-[#4c4c4c] hover:after:bg-[#4c4c4c]"
          >
            <span className=" text-sm font-bold tracking-[0.25px] ">
              {ownership.linkText}
            </span>
            {ownership.thereIsIcon && (
              <ArrowUpRightIcon className="absolute w-3 h-3 right-0 top-50% -translate-y-[150%]" />
            )}
          </a>
        </div>
      </div>
    </div>
  )
}

export default OwnershipItem
