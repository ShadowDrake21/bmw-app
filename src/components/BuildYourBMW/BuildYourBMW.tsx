/* eslint-disable jsx-a11y/anchor-is-valid */
import BuildYourBMWSlider from './BuildYourBMWSlider'
import { buildYourBMWSliderInfo } from '../../static/buildYourBMWSlider'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline'

type Props = {}

const BuildYourBMW = (props: Props) => {
  return (
    <section className="bg-[#f6f6f6] pt-60 xl:pt-20">
      <div className="mx-normalProcents">
        <div className="pb-10 sm:flex sm:justify-between sm:items-center">
          <div className="text-[#221f1f] mb-5 w-full">
            <h2 className="text-11 leading-[13px] font-bold tracking-2.75 mb-[10px] uppercase ">
              SELECTED STARTS
            </h2>
            <h3 className="text-[24px] leading-[30px] font-normal mb-[10px] uppercase sm:text-[30px] sm:leading-[38px] xl:text-[39px] xl:leading-[48px]">
              BUILD YOUR BMW
            </h3>
            <div className="mb-5 w-[90%]">
              <p className="tracking-0.5 text-sm font-normal sm:text-15 sm:leading-6">
                Here's an easy way to get the best of BMW. We've already added
                some popular features to these BMW i5 models – you get to choose
                the rest.
              </p>
            </div>
            <a
              href="#"
              className="inline-block relative text-[#4c4c4c] transition-colors duration-150 hover:text-[#1c69d3] pr-4 "
            >
              <span className="capitalize text-sm leading-[17px] tracking-0.25 font-bold sm:text-15 sm:leading-[18px] xl:text-base xl:leading-5">
                Start Your Build
              </span>
              <ChevronRightIcon className="w-[15px] text-[#1c69d3] absolute right-0 top-1/2 -translate-y-1/2" />
            </a>
          </div>
          <div className="mr-[10%]">
            <a
              href="#"
              className="inline-block pl-[35px] pr-[15px] py-[10px] drop-shadow-10px bg-white rounded-full text-[#221f1f] hover:text-[#4c4c4c] hover:bg-[#ebebeb] whitespace-nowrap"
            >
              <span className="text-15 leading-5 tracking-0.5 font-bold">
                Compare All
              </span>
              <MagnifyingGlassCircleIcon className="text-[#1c69d3] w-6 h-6 absolute left-[7px] top-1/2 -translate-y-1/2" />
            </a>
          </div>
        </div>
        <div>
          <BuildYourBMWSlider items={buildYourBMWSliderInfo} />
        </div>
      </div>
    </section>
  )
}

export default BuildYourBMW
