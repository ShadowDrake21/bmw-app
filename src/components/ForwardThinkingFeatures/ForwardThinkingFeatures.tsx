import { IForwardThinkingFeaturesArray } from '../../static/forwardThinkingFeaturesText'
import ForwardThinkingFeaturesItem from './ForwardThinkingFeaturesItem'
import mainImageMobile from '../../assets/model-i5/forwardThinkingFeatures/FTFeaturesMainMobile.jpg'
import mainImageTablet from '../../assets/model-i5/forwardThinkingFeatures/FTFeaturesMainTablet.jpg'
import mainImageDesktop from '../../assets/model-i5/forwardThinkingFeatures/FTFeaturesMainDesktop.jpg'
import { getMotionStyles, useWindowDimensions } from '../../utils/utils'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const ForwardThinkingFeatures = ({ array }: IForwardThinkingFeaturesArray) => {
  const { width } = useWindowDimensions()

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="safety-and-technology" className="pt-60 xl:pt-80" ref={ref}>
      <div>
        <div style={getMotionStyles(isInView)}>
          <div className="mx-normalProcents text-center relative z-10 text-[#221f1f] sm:mx-[14%] xl:mx-[18%]">
            <h2 className="text-11 leading-[13px] font-bold tracking-2.75 mb-[10px] xl:text-xs">
              SAFETY & TECHNOLOGY
            </h2>
            <h3 className="text-2xl leading-[30px] font-normal tracking-minusSX mb-[10px] sm:text-[30px] sm:leading-[38px] xl:text-[39px] xl:leading-[48px]">
              FORWARD-THINKING FEATURES
            </h3>
            <p className="tracking-0.5 text-sm font-normal sm:text-15 sm:leading-6 xl:text-base xl:leading-[26px]">
              Standard safety technology in the 2024 BMW i5 allows you to
              navigate blind spots and other potential hazards with ease.
            </p>
          </div>
          <div className="-mt-[180px]">
            <img
              className="object-cover w-full"
              src={
                width < 768
                  ? mainImageMobile
                  : width >= 1280
                  ? mainImageDesktop
                  : mainImageTablet
              }
              alt="best-model-img"
            />
          </div>
        </div>
        <div className="bg-[#F6F6F6] px-[8%] pt-10 flex flex-col gap-10 pb-[60px] sm:flex-row sm:px-[12%] sm:gap-[8%] xl:pb-80 xl:pt-[50px] xl:px-[12%]">
          {array.map((item, index) => (
            <ForwardThinkingFeaturesItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ForwardThinkingFeatures
