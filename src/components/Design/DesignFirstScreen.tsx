import { useRef } from 'react'
import { IDesignFirstScreen } from '../../static/designText'
import { useInView } from 'framer-motion'
import { getMotionStyles } from '../../utils/utils'

const DesignFirstScreen = (item: IDesignFirstScreen) => {
  const { video, textData } = item

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div className="xl:relative">
      <div>
        <video
          src={video}
          autoPlay
          loop
          muted
          className="min-h-[400px] object-cover w-full"
        />
      </div>
      <div
        className="video__shadow relative bg-black text-white pt-[25px] pb-[60px] xl:absolute xl:bg-transparent xl:z-40 xl:before:hidden xl:bottom-[50px] xl:pt-0"
        ref={ref}
      >
        <div
          className="mx-[8%] sm:flex sm:gap-10"
          style={getMotionStyles(isInView)}
        >
          <div className="sm:w-full">
            <h2 className="relative z-[2] text-[11px] leading-[13px] font-bold uppercase tracking-[2.75px] mb-[10px] xl:text-xs">
              {textData.type}
            </h2>
            <h3 className="relative z-[2] uppercase text-2xl leading-[30px] tracking-[-0.1px] font-normal sm:text-[30px] sm:leading-[38px] xl:text-[39px] xl:leading-[48px]">
              {textData.title}
            </h3>
          </div>
          <div className="sm:w-full">
            <p className="relative z-[2] text-sm font-normal sm:text-[15px] sm:leading-6 xl:text-base xl:leading-[26px]">
              {textData.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignFirstScreen
