import { useEffect, useRef, useState } from 'react'
import { IFirstScreenVideo } from '../../static/videoItems'
import leaseOfferIcon from '@/assets/model-i5/firstScreen/lease_offer-svg.svg'
import VehicleAddNavBar from '../VehicleAddNavBar/VehicleAddNavBar'
import { useInView } from 'framer-motion'
import { getMotionStyles } from '../../utils/utils'

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

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <VehicleAddNavBar
        isTopOfPage={isTopOfPage}
        title="The i5"
        link={btnLink}
      />
      <section className="max-h-full h-full" ref={ref}>
        <div className="relative">
          <video
            src={videoURL}
            autoPlay
            loop
            muted
            className="min-h-[500px] object-cover w-full"
          />
          <div className="hidden absolute w-full h-full top-0 text-white mx-smallProcents sm:block">
            <div
              className="absolute top-1/2 -translate-y-1/2 sm:w-[30%] xl:top-[38%] xl:flex xl:flex-col"
              style={getMotionStyles(isInView)}
            >
              <h2 className="text-[32px] leading-[38px] font-normal relative z-20 top-0 sm:text-[42px] sm:leading-[50px] xl:text-[56px] xl:leading-[68px]">
                {mainTitle}
              </h2>
              <h1 className="text-xl tracking-minusSX font-normal mt-1 mb-5 sm:text-23 sm:leading-[31px] xl:text-28 xl:leading-[37px] xl:mb-3">
                {mainDescription}
              </h1>
              <div className="hidden mt-3 xl:block">
                <a
                  href={btnLink}
                  className="inline-block rounded-sm px-7 py-3 bg-[#1c69d3] transition-all duration-100 hover:text-[#ebebeb] hover:bg-[#1d55a2] xl:pt-[18px] xl:pb-[17px] xl:px-[35px]"
                >
                  <span className="text-13 leading-4 tracking-0.5 font-bold xl:text-15 xl:leading-5">
                    {btnText}
                  </span>
                </a>
              </div>
            </div>
            <div className="absolute bottom-12 xl:hidden">
              <a
                href={btnLink}
                className="inline-block rounded-sm px-7 py-3 bg-[#1c69d3] transition-all duration-100 hover:text-[#ebebeb] hover:bg-[#1d55a2] xl:pt-[18px] xl:pb-[17px] xl:px-[35px]"
              >
                <span className="text-13 leading-4 tracking-0.5 font-bold xl:text-15 xl:leading-5">
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
          <div className="hidden text-[#f6f6f6] w-max absolute z-10 xl:block xl:bottom-[50px] xl:mx-smallProcents">
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
              <span className="text-2xl font-normal tracking-minusSX sm:text-[30px] sm:leading-9 xl:text-[39px] xl:leading-[48px]">
                {laserOfferPrice}
              </span>
              <span className="text-xs font-normal tracking-0.25 sm:text-13 sm:leading-4">
                /month
              </span>
            </p>
            <p className="mt-[5px] text-xs tracking-0.25">
              {laserOfferDescription}
            </p>
            <a
              href={importantInfoLink}
              className="inline-block text-11 leading-[13px] capitalize tracking-0.25 border-b border-white sm:pt-[14px]"
            >
              important info
            </a>
          </div>
        </div>
        <div className="video__shadow relative bg-black text-white pb-[25px] xl:hidden">
          <div className="mx-smallProcents pt-1 pb-[15px]">
            <div
              className="block sm:hidden"
              style={{
                transform: isInView ? 'none' : 'translateY(50px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 1s',
              }}
            >
              <h2 className="text-[32px] leading-[38px] font-normal relative z-20">
                {mainTitle}
              </h2>
              <h1 className="text-xl tracking-minusSX font-normal mt-1 mb-5">
                {mainDescription}
              </h1>
              <div className="mb-7">
                <a
                  href={btnLink}
                  className="inline-block rounded-sm px-7 py-3 bg-[#1c69d3] transition-all duration-100 hover:text-[#ebebeb] hover:bg-[#1d55a2]"
                >
                  <span className="text-13 leading-4 tracking-0.5 font-bold">
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
                  <span className="text-2xl font-normal tracking-minusSX sm:text-[30px] sm:leading-9">
                    {laserOfferPrice}
                  </span>
                  <span className="text-xs font-normal tracking-0.25 sm:text-13 sm:leading-4">
                    /month
                  </span>
                </p>
                <p className="mt-[5px] text-xs tracking-0.25">
                  {laserOfferDescription}
                </p>
                <a
                  href={importantInfoLink}
                  className="inline-block text-11 leading-[13px] capitalize tracking-0.25 border-b border-white sm:pt-[14px]"
                >
                  important info
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default VehicleFirstScreen
