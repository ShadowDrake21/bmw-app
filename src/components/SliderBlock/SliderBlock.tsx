import Slider from 'react-slick'
import { ISlider } from '../../static/sliderPhotos'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slickBlock.css'
import { useEffect, useState } from 'react'

type Props = {
  imgArray: Array<Object>
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

const SliderBlock = ({ array }: any) => {
  const { width } = useWindowDimensions()

  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 1500,
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
        {array.map(({ smallPhoto, mediumPhoto, largePhoto }: any) => (
          <img
            src={
              width < 768
                ? smallPhoto
                : width >= 1280
                ? largePhoto
                : mediumPhoto
            }
            alt="slider-img"
          />
        ))}
      </Slider>
    </div>
  )
}

export default SliderBlock
