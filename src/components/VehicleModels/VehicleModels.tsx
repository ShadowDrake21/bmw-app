import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { vehicleModelsInfo } from '../../static/vehicleModels'
import VehicleModelsItem from './VehicleModelsItem'
import './slickVehicle.css'
import { useWindowDimensions } from '../../utils/utils'

type Props = {}

const VehicleModels = (props: Props) => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 0,
    className: 'slick__vehacle-models',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const { width } = useWindowDimensions()
  const widthCheckSM = () => {
    return width < 768
  }
  return (
    <section id="models" className="py-10 sm:py-[60px] xl:py-80">
      <div className="mx-[14%] text-center text-[#221f1f] mb-10">
        <h3 className="uppercase text-11 leading-[13px] tracking-2.75 font-bold mb-5 xl:text-xs xl:mb-[25px]">
          bmw i5 sedan
        </h3>
        <p className="text-xl leading-[26px] tracking-minusSX font-normal sm:text-23 sm:leading-[31px] xl:text-28 xl:leading-[37px]">
          This all-electric sporty business sedan leads with executive presence,
          best-in-class technology, and dynamic performance.
        </p>
      </div>
      <div className="text-center sm:flex sm:justify-center">
        {widthCheckSM() ? (
          <Slider {...settings}>
            {vehicleModelsInfo.map((vehicleModel, index) => (
              <VehicleModelsItem key={index} {...vehicleModel} />
            ))}
          </Slider>
        ) : (
          vehicleModelsInfo.map((vehicleModel, index) => (
            <VehicleModelsItem key={index} {...vehicleModel} />
          ))
        )}
      </div>
    </section>
  )
}

export default VehicleModels
