import React from 'react'
import { IBMWCharging } from '../../static/BMWCharging'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

const BMWChargingItem = (item: IBMWCharging) => {
  const { img, title, info, charging, link } = item

  const setQuestionMark = () => {
    return (
      <QuestionMarkCircleIcon className="inline-block w-4 h-4 text-[#727171] cursor-pointer" />
    )
  }

  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <div className="mb-5 w-full xl:mb-[25px]">
          <img src={img} alt="BMW Charging item" className="w-full" />
        </div>
        <div className="w-full sm:w-[95%] xl:w-[90%]">
          <h4 className="text-[14px] leading-[17px] font-bold tracking-[0.25px] mb-[10px] sm:text-[15px] sm:leading-[18px] sm:tracking-[0.5px] xl:text-base xl:leading-5">
            {title.titleText}{' '}
            <span>{title.thereIsIcon && setQuestionMark()}</span>
          </h4>
          <div className="flex flex-col text-xs leading-[18px] font-normal gap-4 tracking-[.5px] sm:text-[13px] sm:leading-5">
            <p>
              {info.infoText}{' '}
              <span>{info.thereIsIcon && setQuestionMark()}</span>
            </p>
            <p>
              {charging.chargingText}{' '}
              <span>{charging.thereIsIcon && setQuestionMark()}</span>
            </p>
            {item.link.thereIsLink && (
              <div>
                <a href={link.linkURL}>
                  <span className="text-[#1c69d3] font-bold border-b border-[#1c69d3] text-[11px] leading-[13px] tracking-[.25px] sm:text-[11px] sm:leading-[13px]">
                    {link.linkText}
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BMWChargingItem
