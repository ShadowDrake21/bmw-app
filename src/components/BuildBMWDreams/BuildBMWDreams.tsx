import React from 'react'
import BuildBMWDreamsItem from './BuildBMWDreamsItem'
import { buildBMWDreamsInfo } from '../../static/buildBMWDreams'
import { motion } from 'framer-motion'
import { inView } from 'framer-motion'

type Props = {}

const childVariant = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: { opacity: 1, scale: 1 },
}

const BuildBMWDreams = (props: Props) => {
  return (
    <div>
      <div className="bg-[#F6F6F6] pt-10 pb-12 sm:py-[60px] xl:py-[80px]">
        <h3 className="text-xl tracking-[-0.1px] text-[#221f1f] text-center mb-[25px] sm:text-[23px] sm:leading-[31px] xl:text-[28px] xl:leading-[37px]">
          Build the BMW of your dreams.
        </h3>
        <div className="mx-[4%] sm:pt-[25px]">
          <div className="mb-11 grid grid-cols-[auto_auto] gap-[4%] sm:grid-cols-[auto_auto_auto_auto] xl:mb-[50px]">
            {buildBMWDreamsInfo.map((dreamBMW) => (
              <BuildBMWDreamsItem {...dreamBMW} />
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
