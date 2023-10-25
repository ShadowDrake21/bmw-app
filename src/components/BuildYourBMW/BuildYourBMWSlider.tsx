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
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slick__main-build',
    dotsClass: 'slick-dots slick__build-dots',
    fade: true,
  }
  return (
    <div>
      <Slider {...settings}>
        {items.map((item: IBuildYourBMW, index) => (
          <div key={index}>
            <BuildYourBMWSliderItem {...item} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default BuildYourBMWSlider
