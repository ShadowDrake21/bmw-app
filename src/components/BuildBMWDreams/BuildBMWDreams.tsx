/* eslint-disable jsx-a11y/anchor-is-valid */
import BuildBMWDreamsItem from './BuildBMWDreamsItem'
import { buildBMWDreamsInfo } from '../../static/buildBMWDreams'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { getMotionStyles } from '../../utils/utils'

type Props = {}

const BuildBMWDreams = (props: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section ref={ref}>
      <div
        style={getMotionStyles(isInView)}
        className="bg-[#F6F6F6] pt-10 pb-12 sm:py-[60px] xl:py-80"
      >
        <h3 className="text-xl tracking-minusSX text-[#221f1f] text-center mb-[25px] sm:text-23 sm:leading-[31px] xl:text-28 xl:leading-[37px]">
          Build the BMW of your dreams.
        </h3>
        <div className="mx-smallProcents sm:pt-[25px]">
          <div className="mb-11 grid grid-cols-[auto_auto] gap-[4%] sm:grid-cols-[auto_auto_auto_auto] xl:mb-[50px]">
            {buildBMWDreamsInfo.map((dreamBMW, index) => (
              <BuildBMWDreamsItem key={index} {...dreamBMW} />
            ))}
          </div>
          <div className="text-center">
            <a
              href="#"
              className="px-[25px] py-3 text-white bg-[#221f1f] text-13 leading-[16px] tracking-0.5 font-bold transition-all duration-200 hover:bg-[#4c4c4c]"
            >
              Build Your Own
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildBMWDreams
