import { useRef } from 'react'
import { IForwardThinkingFeatures } from '../../static/forwardThinkingFeaturesText'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { useInView } from 'framer-motion'
import { getMotionStyles } from '../../utils/utils'

const ForwardThinkingFeaturesItem = (item: IForwardThinkingFeatures) => {
  const { image, title, textInfo } = item

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div ref={ref}>
      <div
        className="flex gap-[5%] sm:flex-col sm:gap-5 xl:gap-[25px]"
        style={getMotionStyles(isInView)}
      >
        <div className="w-1/2 sm:w-full">
          <img src={image} alt="safety and technology" />
        </div>
        <div className="w-full text-[#221f1f] sm:text-center">
          <h4 className="text-base leading-5 font-bold tracking-0.5 mb-[10px] sm:text-[18px] sm:leading-[22px]">
            {title}
          </h4>
          <p className="text-xs leading-[18px] font-normal tracking-0.5 sm:text-13 sm:leading-5">
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
