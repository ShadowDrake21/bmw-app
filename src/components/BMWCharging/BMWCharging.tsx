import { IBMWChargingArray } from '../../static/BMWCharging'
import BMWChargingItem from './BMWChargingItem'
import titlePhoto from '../../assets/model-i5/BMWCharging/BMWChargingTitle.png'
import BMWChargingPlugAndCharge from './BMWChargingPlugAndCharge'

const BMWCharging = ({ array }: IBMWChargingArray) => {
  return (
    <section className="pt-5 pb-10 sm:pt-10 xl:py-[70px]">
      <div className="mx-[8%] text-[#221f1f]">
        <div className="flex flex-col items-center mb-10 xl:mb-[50px]">
          <div className="mx-[16%] mb-5 sm:mx-[28%] xl:mx-[40%] xl:mb-[25px]">
            <img src={titlePhoto} alt="BMW Charging" />
          </div>
          <p className="text-center text-base font-normal mx-[5%] sm:text-lg xl:mx-[20%]">
            BMW Charging – a comprehensive charging program for BMW electrified
            vehicles – offers tailored solutions for both home and public
            charging.
          </p>
        </div>
        <div className="flex flex-wrap gap-y-10 mb-10 sm:flex-nowrap xl:mb-[80px]">
          {array.map((item, index) => (
            <BMWChargingItem key={index} {...item} />
          ))}
        </div>
        <BMWChargingPlugAndCharge />
        <div className="text-center mt-[30px] sm:mt-10 xl:mt-5">
          <a
            href="#"
            className="inline-block  px-[25px] pt-[15px] pb-[14px] rounded-sm bg-[#1c69d3] text-white hover:text-[#ebebeb] hover:bg-[#1d55a2] xl:px-[35px] xl:pt-[17px] xl:pb-4"
          >
            <span className="capitalize text-[13px] leading-4 tracking-[0.5px] font-bold xl:text-15px xl:leading-5">
              explore BMW charging
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default BMWCharging
