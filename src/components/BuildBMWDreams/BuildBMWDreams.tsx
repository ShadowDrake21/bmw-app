import BuildBMWDreamsItem from './BuildBMWDreamsItem'
import { buildBMWDreamsInfo } from '../../static/buildBMWDreams'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

type Props = {}

const BuildBMWDreams = (props: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div ref={ref}>
      <div
        style={{
          transform: isInView ? 'none' : 'translateY(50px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 1s',
        }}
        className="bg-[#F6F6F6] pt-10 pb-12 sm:py-[60px] xl:py-[80px]"
      >
        <h3 className="text-xl tracking-[-0.1px] text-[#221f1f] text-center mb-[25px] sm:text-[23px] sm:leading-[31px] xl:text-[28px] xl:leading-[37px]">
          Build the BMW of your dreams.
        </h3>
        <div className="mx-[4%] sm:pt-[25px]">
          <div className="mb-11 grid grid-cols-[auto_auto] gap-[4%] sm:grid-cols-[auto_auto_auto_auto] xl:mb-[50px]">
            {buildBMWDreamsInfo.map((dreamBMW, index) => (
              <BuildBMWDreamsItem key={index} {...dreamBMW} />
            ))}
          </div>
          <div className="text-center">
            <a
              href="#"
              className="px-[25px] py-3 text-white bg-[#221f1f] text-[13px] leading-[16px] tracking-[0.5px] font-bold transition-all duration-200 hover:bg-[#4c4c4c]"
            >
              Build Your Own
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuildBMWDreams
