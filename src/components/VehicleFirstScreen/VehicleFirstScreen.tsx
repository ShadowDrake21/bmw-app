import { useEffect, useState } from 'react'
import { IFirstScreenVideo } from '../../static/videoItems'
import leaseOfferIcon from '@/assets/model-i5/firstScreen/lease_offer-svg.svg'
import VehicleAddNavBar from '../VehicleAddNavBar/VehicleAddNavBar'

const VehicleFirstScreen = (firstScreenInfo: IFirstScreenVideo) => {
  const {
    videoURL,
    mainTitle,
    mainDescription,
    btnText,
    btnLink,
    icon,
    secondaryDescription,
    laserOfferPrice,
    laserOfferDescription,
    importantInfoLink,
  } = firstScreenInfo

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 70) {
        setIsTopOfPage(true)
      }
      if (window.scrollY >= 70) setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <VehicleAddNavBar
        isTopOfPage={isTopOfPage}
        title="The i5"
        link={btnLink}
      />
      <div className="max-h-full h-full">
        <div className="relative">
          <video
            src={videoURL}
            autoPlay
            loop
            muted
            className="min-h-[500px] object-cover w-full"
          />
          <div className="hidden absolute w-full h-full top-0 text-white mx-[4%] sm:block">
            <div className="absolute top-1/2 -translate-y-1/2 sm:w-[30%] xl:top-[38%] xl:flex xl:flex-col">
              <h2 className="text-[32px] leading-[38px] font-normal relative z-20 top-0 sm:text-[42px] sm:leading-[50px] xl:text-[56px] xl:leading-[68px]">
                {mainTitle}
              </h2>
              <h1 className="text-xl tracking-[-.1px] font-normal mt-1 mb-5 sm:text-[23px] sm:leading-[31px] xl:text-[28px] xl:leading-[37px] xl:mb-3">
                {mainDescription}
              </h1>
              <div className="hidden mt-3 xl:block">
                <a
                  href={btnLink}
                  className="inline-block rounded-sm px-7 py-3 bg-[#1c69d3] transition-all duration-100 hover:text-[#ebebeb] hover:bg-[#1d55a2] xl:pt-[18px] xl:pb-[17px] xl:px-[35]"
                >
                  <span className="text-[13px] leading-4 tracking-[.5px] font-bold xl:text-[15px] xl:leading-5">
                    {btnText}
                  </span>
                </a>
              </div>
            </div>
            <div className="absolute bottom-12 xl:hidden">
              <a
                href={btnLink}
                className="inline-block rounded-sm px-7 py-3 bg-[#1c69d3] transition-all duration-100 hover:text-[#ebebeb] hover:bg-[#1d55a2] xl:pt-[18px] xl:pb-[17px] xl:px-[35]"
              >
                <span className="text-[13px] leading-4 tracking-[.5px] font-bold xl:text-[15px] xl:leading-5">
                  {btnText}
                </span>
              </a>
            </div>
            <div className="absolute right-[8%] bottom-5">
              <div className="pb-3">
                <img src={icon} alt="icon" className="w-10" />
              </div>
              <span className="text-[10px] tracking-[.7px] font-normal">
                {secondaryDescription} Visit your authorized BMW Center for
                offer details.
              </span>
            </div>
          </div>
          <div className="hidden text-[#f6f6f6] w-max absolute z-10 xl:block xl:bottom-[50px] xl:mx-[4%]">
            <p className="relative pr-[17px] w-max mb-[10px]">
              <span className="text-[10px] leading-[13px] font-bold tracking-[2px] uppercase">
                Lease offer
              </span>
              <img
                src={leaseOfferIcon}
                alt="icon"
                className="absolute w-3 h-3 right-0 top-2/3 -translate-y-1/2"
              />
            </p>
            <p>
              <span className="text-2xl font-normal tracking-[-.1px] sm:text-[30px] sm:leading-9 xl:text-[39px] xl:leading-[48px]">
                {laserOfferPrice}
              </span>
              <span className="text-xs font-normal tracking-[.25px] sm:text-[13px] sm:leading-4">
                /month
              </span>
            </p>
            <p className="mt-[5px] text-xs tracking-[.25px]">
              {laserOfferDescription}
            </p>
            <a
              href={importantInfoLink}
              className="inline-block text-[11px] leading-[13px] capitalize tracking-[.25px] border-b border-white sm:pt-[14px]"
            >
              important info
            </a>
          </div>
        </div>
        <div className="first__screen-shadow relative bg-black text-white pb-[25px] xl:hidden">
          <div className="mx-[4%] pt-1 pb-[15px]">
            <div className="block sm:hidden">
              <h2 className="text-[32px] leading-[38px] font-normal relative z-20">
                {mainTitle}
              </h2>
              <h1 className="text-xl tracking-[-.1px] font-normal mt-1 mb-5">
                {mainDescription}
              </h1>
              <div className="mb-7">
                <a
                  href={btnLink}
                  className="inline-block rounded-sm px-7 py-3 bg-[#1c69d3] transition-all duration-100 hover:text-[#ebebeb] hover:bg-[#1d55a2]"
                >
                  <span className="text-[13px] leading-4 tracking-[.5px] font-bold">
                    {btnText}
                  </span>
                </a>
              </div>
              <div className="pb-12">
                <div className="pb-3">
                  <img src={icon} alt="icon" className="w-10" />
                </div>
                <span className="text-[10px] tracking-[.7px] font-normal">
                  {secondaryDescription} Visit your authorized BMW Center for
                  offer details.
                </span>
              </div>
            </div>

            <div className="sm:w-full sm:pt-10 sm:relative sm:after:absolute after:content-[''] after:h-full after:w-[1px] after:bg-[#4c4c4c] after:right-1/2 after:top-[15px] after:z-10">
              <div className="text-[#f6f6f6] w-max">
                <p className="relative pr-[17px] w-max mb-[10px]">
                  <span className="text-[10px] leading-[13px] font-bold tracking-[2px] uppercase">
                    Lease offer
                  </span>
                  <img
                    src={leaseOfferIcon}
                    alt="icon"
                    className="absolute w-3 h-3 right-0 top-2/3 -translate-y-1/2"
                  />
                </p>
                <p>
                  <span className="text-2xl font-normal tracking-[-.1px] sm:text-[30px] sm:leading-9">
                    {laserOfferPrice}
                  </span>
                  <span className="text-xs font-normal tracking-[.25px] sm:text-[13px] sm:leading-4">
                    /month
                  </span>
                </p>
                <p className="mt-[5px] text-xs tracking-[.25px]">
                  {laserOfferDescription}
                </p>
                <a
                  href={importantInfoLink}
                  className="inline-block text-[11px] leading-[13px] capitalize tracking-[.25px] border-b border-white sm:pt-[14px]"
                >
                  important info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VehicleFirstScreen
