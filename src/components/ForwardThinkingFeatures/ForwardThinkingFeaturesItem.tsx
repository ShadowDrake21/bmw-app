import React from 'react'
import { IForwardThinkingFeatures } from '../../static/forwardThinkingFeaturesText'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

const ForwardThinkingFeaturesItem = (item: IForwardThinkingFeatures) => {
  const { image, title, textInfo } = item
  return (
    <div>
      <div className="flex gap-[5%] sm:flex-col sm:gap-5 xl:gap-[25px]">
        <div className="w-1/2 sm:w-full">
          <img src={image} alt="safety and technology" />
        </div>
        <div className="w-full text-[#221f1f] sm:text-center">
          <h4 className="text-base leading-5 font-bold tracking-[.5px] mb-[10px] sm:text-[18px] sm:leading-[22px]">
            {title}
          </h4>
          <p className="text-xs leading-[18px] font-normal tracking-[.5px] sm:text-[13px] sm:leading-5">
            {textInfo.textContent}{' '}
            <span>
              {textInfo.thereIsIcon && (
                <QuestionMarkCircleIcon className="inline-block w-4 h-4 text-[#727171] cursor-pointer" />
              )}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForwardThinkingFeaturesItem
