import React from 'react'
import { IMakeItYours, IMakeItYoursPhotos } from '../../static/makeItYoursText'
import { useWindowDimensions } from '../../utils/utils'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const MakeItYoursPhoto = (photoItem: IMakeItYoursPhotos) => {
  const { width } = useWindowDimensions()
  return (
    <img
      src={
        width < 768
          ? photoItem.photoMobile
          : width >= 1280
          ? photoItem.photoDesktop
          : photoItem.photoTablet
      }
      alt=""
      className=""
    />
  )
}

const MakeItYours = (object: IMakeItYours) => {
  const { textContent, photoContent } = object
  const { type, title, leaseOfferInfo, links } = textContent

  const linkTextCommonStyles =
    'text-[13px] leading-4 font-bold tracking-[0.5px]  capitalize'

  const linkButtonCommonStyles =
    'inline-block py-3 px-5 rounded-2 w-full text-center transition-colors duration-100 text-white hover:text-[#ebebeb]'

  return (
    <section>
      <div>
        <div className="py-[60px]">
          <div className="mx-[8%] text-[#221f1f]">
            <h2 className="text-[11px] leading-[13px] tracking-[2.75px] font-bold mb-[10px]">
              {type}
            </h2>
            <h3 className="text-2xl tracking-[-0.1px]">{title}</h3>
            <div className="py-[30px] relative after:absolute after:w-full after:h-[1px] after:bg-[#CACACA] after:bottom-0 after:left-0">
              <p className="relative pr-[17px] w-max mb-[10px]">
                <span className="text-[10px] leading-[13px] font-bold tracking-[2px] uppercase">
                  Lease offer
                </span>
                <img
                  src={leaseOfferInfo.icon}
                  alt="icon"
                  className="absolute w-3 h-3 right-0 top-2/3 -translate-y-1/2"
                />
              </p>
              <p>
                <span className="text-2xl font-normal tracking-[-.1px] sm:text-[30px] sm:leading-9 xl:text-[39px] xl:leading-[48px]">
                  {leaseOfferInfo.price}
                </span>
                <span className="text-xs font-normal tracking-[.25px] sm:text-[13px] sm:leading-4">
                  /month
                </span>
              </p>
              <p className="mt-[5px] text-xs tracking-[.25px]">
                {leaseOfferInfo.description}
              </p>
              <a
                href={leaseOfferInfo.importantInfoLink}
                className="inline-block text-[11px] leading-[13px] font-bold capitalize tracking-[.25px] mt-5 border-b border-[#221f1f] sm:pt-[14px]"
              >
                important info
              </a>
            </div>
            <div className="py-5">
              <a
                href={links.allOffers.link}
                className="pr-4 relative text-[#4c4c4c] transition-all duration-150 hover:text-[#1c69d3]"
              >
                <span className="capitalize text-xs tracking-[0.25px] font-bold">
                  {links.allOffers.text}
                </span>{' '}
                <ChevronRightIcon className="w-[15px] text-[#1c69d3] absolute right-0 top-[5px]" />
              </a>
            </div>
            <div className="flex flex-col gap-[10px] pt-[10px]">
              <div>
                <a
                  href={links.buildYours.link}
                  className={`${linkButtonCommonStyles} bg-[#1c69d3] hover:bg-[#1d55a2]`}
                >
                  <span className={`${linkTextCommonStyles}`}>
                    {links.buildYours.text}
                  </span>
                </a>
              </div>
              <div>
                <a
                  href={links.contactDealer.link}
                  className={`${linkButtonCommonStyles} bg-[#221f1f] hover:bg-[#4c4c4c]`}
                >
                  <span className={`${linkTextCommonStyles}`}>
                    {links.contactDealer.text}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          {photoContent.map(
            (photo, index) =>
              index < 2 && (
                <div>
                  <MakeItYoursPhoto {...photo} />
                </div>
              )
          )}
          <div className="flex">
            {photoContent.map(
              (photo, index) =>
                index >= 2 && (
                  <div className="w-1/2">
                    <MakeItYoursPhoto {...photo} />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MakeItYours
