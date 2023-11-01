import imageSmallDevices from '../../assets/model-i5/unlimitedHorizons/unlimitedHorizonsPhotoSmallGadgets.jpg'
import imageDesktop from '../../assets/model-i5/unlimitedHorizons/unlimitedHorizonsPhotoDesktop.jpg'
import { getMotionStyles, useWindowDimensions } from '../../utils/utils'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

type Props = {}

interface IUnlimitedHorizonsCharacteristics {
  numMiles: string
  modelName: string
}

const unlimitedHorizonsCharacteristics: IUnlimitedHorizonsCharacteristics[] = [
  {
    numMiles: 'From 270 to 295 miles',
    modelName: 'in the i5 eDrive40',
  },
  {
    numMiles: 'From 240 to 256 miles',
    modelName: 'in the i5 M60',
  },
]

const UnlimitedHorizons = (props: Props) => {
  const { width } = useWindowDimensions()

  const widthCheckTablet = () => {
    return width >= 768
  }

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      id="range-and-charging"
      className="pt-[100px] pb-[50px] sm:pt-[120px] xl:pt-[140px] sm:pb-[60px] xl:pb-[70px]"
      ref={ref}
    >
      <div>
        <div className="mx-[8%] text-center text-[#221f1f] pb-10 sm:mx-[12%] xl:mx-[20%] xl:pb-[50px]">
          <h2 className="text-[11px] leading-[13px] font-bold tracking-[2.75px] mb-[10px] xl:text-xs">
            RANGE & CHARGING
          </h2>
          <h3 className="text-2xl leading-[30px] font-normal tracking-[-0.1px] mb-[10px] sm:text-[30px] sm:leading-[38px] xl:text-[39px] xl:leading-[48px]">
            UNLIMITED HORIZONS
          </h3>
          <div className="mb-5 xl:mb-[25px]">
            <p className="tracking-[0.5px] text-base font-normal sm:text-lg">
              Drive farther, live more. With a battery capacity of up to 84.3
              kWh and an estimated range from 240 to 295 miles, the BMW i5
              models can take you anywhere you need to go.
            </p>
          </div>
          <a
            href="#"
            className="inline-block px-[35px] pt-[18px] pb-[17px] rounded-sm bg-[#1c69d3] text-white hover:text-[#ebebeb] hover:bg-[#1d55a2]"
          >
            <span className="capitalize text-[15px] leading-5 tracking-[0.5px] font-bold">
              map your route
            </span>
          </a>
        </div>
        <div className="pb-[10px]" style={getMotionStyles(isInView)}>
          <img
            src={!widthCheckTablet ? imageSmallDevices : imageDesktop}
            alt="unlimited horizons"
          />
        </div>
        <div className="flex justify-center gap-[5%] xl:gap-[12%]">
          {unlimitedHorizonsCharacteristics.map(({ numMiles, modelName }) => (
            <div className="text-center">
              <div className="relative pr-5 mb-[10px]">
                <p className="text-base leading-5 tracking-[-.1px] font-bold sm:text-lg sm:leading-[22px] xl:text-xl xl:leading-6">
                  {numMiles}
                </p>
                <QuestionMarkCircleIcon className="w-4 h-4 text-[#727171] absolute right-0 top-1/2 -translate-y-1/2" />
              </div>
              <span className="text-sm font-normal tracking-[0.5px] sm:text-[15px] sm:leading-6 xl:text-base xl:leading-[26px]">
                {modelName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UnlimitedHorizons
