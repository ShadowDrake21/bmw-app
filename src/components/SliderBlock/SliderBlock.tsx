import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { ISlider } from '../../static/sliderPhotos'

type Props = {
  imgArray: Array<Object>
}

const SliderBlock = ({ array }: any) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div>
      <Slider {...settings}>
        {array.map(({ photo }: any) => (
          <img src={photo} alt="slider-img" />
        ))}
      </Slider>
    </div>
  )
}

export default SliderBlock
