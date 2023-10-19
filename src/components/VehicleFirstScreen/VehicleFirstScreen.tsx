import React from 'react'
import { IFirstScreenVideo } from '../../static/videoItems'
import { useWindowDimensions } from '../../utils/utils'
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
  const { width } = useWindowDimensions()
  const widthCheckXL = () => {
    return width < 1280
  }
  return (
    <>
      <VehicleAddNavBar title="The i5" link={btnLink} />
      <div className="max-h-screen h-full">
        <div>
          <video
            src={videoURL}
            autoPlay
            loop
            muted
            className="min-h-[500px] object-cover w-full"
          />
        </div>
        <div className="first__screen-shadow relative bg-black text-white pb-[25px]">
          <div className="mx-[4%] pt-1 pb-[15px]">
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
            <div>
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
                  <span className="text-2xl font-normal tracking-[-.1px]">
                    {laserOfferPrice}
                  </span>
                  <span className="text-xs font-normal tracking-[.25px]">
                    /month
                  </span>
                </p>
                <p className="mt-[5px] text-xs tracking-[.25px]">
                  {laserOfferDescription}
                </p>
                <a
                  href={importantInfoLink}
                  className="text-[11px] leading-[13px] capitalize tracking-[.25px] border-b border-white"
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
