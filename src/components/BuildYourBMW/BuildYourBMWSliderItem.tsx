import { CheckIcon } from '@heroicons/react/24/solid'
import { IBuildYourBMW } from '../../static/buildYourBMWSlider'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import './BuildYourBMWSlider.css'

const BuildYourBMWSliderItem = (item: IBuildYourBMW) => {
  return (
    <div className="relative">
      <div className="absolute w-full">
        <img
          src={item.background}
          alt="background"
          className="max-h-[335px] w-full"
        />
      </div>
      <div className="relative z-10 bottom-0">
        <div className="absolute flex top-[25px] left-[25px]">
          {item.icons.map((icon, index) => (
            <img src={icon} key={index} alt="icon" className="h-5" />
          ))}
        </div>
        <div className="text-white text-center pt-80">
          <div>
            <h3 className="text-11 font-bold leading-[13px] tracking-2.75 mb-[6px] xl:text-xs">
              {item.name}
            </h3>
            <h4 className="text-2xl tracking-minusSX font-normal uppercase mb-[6px] sm:text-[30px] sm:leading-[38px] xl:text-[39px] xl:leading-[48px]">
              {item.adjective}
            </h4>
            <p className="text-sm leading-[17px] tracking-0.25 pr-[18px] relative inline-block sm:text-15 sm:leading-[18px] xl:text-base xl:leading-5">
              <span>MSRP as Built</span>{' '}
              <span className="font-bold">{item.price}</span>
              <QuestionMarkCircleIcon className="text-[#cacaca] w-[15px] h-[15px] absolute right-0 top-0 cursor-pointer" />
            </p>
          </div>
          <div className="flex justify-center w-full">
            <img
              src={item.carImg}
              alt={item.name}
              className="max-w-[80%] xl:max-w-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mb-5">
          <ul className="flex justify-center gap-[15px] -mt-[25px] mb-[30px]">
            {item.additionalInfo.preConfigPhotos.map((photo, index) => (
              <li
                key={index}
                className="rounded-full overflow-hidden cursor-pointer"
              >
                <img
                  src={photo}
                  alt="preConfig"
                  className="w-[30px] h-[30px] object-cover xl:w-10 xl:h-10"
                />
              </li>
            ))}
          </ul>
          <ul className="w-[90%] flex flex-col gap-[15px] sm:items-center">
            {item.additionalInfo.preConfigText.map((text, index) => (
              <li key={index} className="relative pl-[28px]">
                <span className="text-xs leading-[18px] font-normal tracking-0.5 sm:text-13 sm:leading-5">
                  {text}
                </span>
                <CheckIcon className="w-[22px] h-[22px] text-[#1c69d3] absolute left-0 top-0" />
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <div className="mb-5 xl:mb-[25px]">
            <a
              href={item.link}
              className="capitalize rounded-sm px-[25px] py-[13px] inline-block bg-[#221f1f] text-white hover:bg-[#4c4c4c] hover:text-[#ebebeb]"
            >
              <span className="text-13 leading-4 tracking-0.5 font-bold xl:text-15 xl:leading-5">
                Start building
              </span>
            </a>
          </div>
          <div className="uppercase text-11 leading-[13px] tracking-2.75 font-normal flex flex-col items-center xl:text-xs">
            {item.speedInfo.map((item, index) => (
              <p
                key={index}
                className="mb-[15px] relative pr-5 inline-block w-max"
              >
                <span>{index === 0 ? 'range:' : '0-60 mph:'}</span>
                <span className="ml-1 font-bold">{item}</span>
                <QuestionMarkCircleIcon className="text-[#cacaca] w-[15px] h-[15px] absolute right-0 top-0 cursor-pointer " />
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuildYourBMWSliderItem
