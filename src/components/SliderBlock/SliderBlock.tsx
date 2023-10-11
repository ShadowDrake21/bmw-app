import Slider from 'react-slick'
import { ISlider } from '../../static/sliderItems'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slickBlock.css'
import { useEffect, useState } from 'react'
import { useWindowDimensions } from '../../utils/utils'

const SliderBlock = ({ array }: any) => {
  const { width } = useWindowDimensions()

  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slick__main',
    dotsClass: 'slick-dots slick__main-dots',
    fade: true,
  }
  return (
    <div>
      <Slider {...settings}>
        {array.map(({ photos, texts, links, index }: any) => (
          <div key={index} className="relative">
            <img
              className="w-full h-full object-cover"
              src={
                width < 768
                  ? photos.smallPhoto
                  : width >= 1280
                  ? photos.largePhoto
                  : photos.mediumPhoto
              }
              alt="slider-img"
            />
            <div className="mr-5 ml-[4%] bottom-[90px] absolute uppercase text-white sm:top-[100px] max-w-[360px]">
              <div className="mb-5">
                <h3 className="text-[32px] font-normal leading-[38px] mb-3 sm:text-[42px] sm:leading-[50px] xl:text-[56px] xl:leading-[68px]">
                  {texts.title}
                </h3>
                <h5 className="text-xl font-light sm:text-[23px] sm:leading-[31px] xl:text-[28px] xl:leading-[37px]">
                  {texts.description}
                </h5>
              </div>
              <div className="capitalize font-bold tracking-[.6px]">
                {links.map(({ text, linkText, color }: any) => (
                  <a
                    key={index + text}
                    href={linkText}
                    className={`inline-block z-50 relative text-[13px] text-center leading-normal px-[3px] w-[43%] py-3 mr-5 ${
                      color === 'white'
                        ? 'text-black bg-white'
                        : 'text-white bg-[#1c69d3]'
                    }`}
                  >
                    {text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderBlock
