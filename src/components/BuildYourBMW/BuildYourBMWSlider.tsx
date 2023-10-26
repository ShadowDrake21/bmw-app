import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useWindowDimensions } from '../../utils/utils'
import {
  IBuildYourBMW,
  IBuildYourBMWArray,
} from '../../static/buildYourBMWSlider'
import BuildYourBMWSliderItem from './BuildYourBMWSliderItem'

const BuildYourBMWSlider = ({ items }: IBuildYourBMWArray) => {
  const { width } = useWindowDimensions()
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 2500,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 0,
    className: 'slick__main-build',
    dotsClass: 'slick-dots slick__build-dots',
    fade: true,
  }
  const widthCheckXL = () => {
    return width < 1280
  }
  return (
    <div className="pb-[120px] xl:pb-[160px]">
      {widthCheckXL() ? (
        <Slider {...settings}>
          {items.map((item: IBuildYourBMW, index) => (
            <div key={index}>
              <BuildYourBMWSliderItem {...item} />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="flex">
          {items.map((item: IBuildYourBMW, index) => (
            <div key={index}>
              <BuildYourBMWSliderItem {...item} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BuildYourBMWSlider
