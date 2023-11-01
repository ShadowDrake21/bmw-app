import { useRef } from 'react'
import { IDesignDetails } from '../../static/designText'
import { getMotionStyles, useWindowDimensions } from '../../utils/utils'
import { useInView } from 'framer-motion'

const DesignDetails = (item: IDesignDetails) => {
  const { images, textContent } = item
  const { width } = useWindowDimensions()

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div className="flex flex-col sm:flex-row sm:mx-[8%] sm:gap-[8%] sm:py-[60px] sm:items-center xl:py-[80px]">
      <div className="flex flex-col sm:w-1/2 sm:gap-5 xl:gap-[25px] xl:w-[70%]">
        {images.map((imageItem) => (
          <div>
            <img
              src={
                width < 768
                  ? imageItem.imageMobile
                  : width >= 1280
                  ? imageItem.imageDesktop
                  : imageItem.imageTablet
              }
              alt="design"
            />
          </div>
        ))}
      </div>
      <div
        className="flex flex-wrap gap-x-[5%] gap-y-10 mx-[8%] py-5 sm:w-1/2 sm:mx-0 sm:gap-y-[80px] sm:gap-x-[11%] xl:gap-y-[100px]"
        ref={ref}
      >
        {textContent.map((textItem) => (
          <div className="w-[47%] sm:w-[44%]" style={getMotionStyles(isInView)}>
            <h6 className="text-sm leading-[17px] font-bold mb-[5px] tracking-[0.25px] sm:tracking-[0.5px] sm:text-15px sm:leading-[18px] sm:mb-[10px] xl:text-base xl:leading-5">
              {textItem.title}
            </h6>
            <p className="text-xs leading-[18px] font-normal tracking-[0.5px] sm:text-[13px] sm:leading-5">
              {textItem.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DesignDetails
