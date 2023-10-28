import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import img from '../../assets/model-i5/BMWCharging/BMWChargingP&C.png'

type Props = {}

const BMWChargingPlugAndCharge = (props: Props) => {
  return (
    <div className="bg-[#f6f6f6] px-[5%] py-10">
      <div>
        <div className="mx-[24%] mb-10">
          <img src={img} alt="Plug and Charge" />
        </div>
        <div>
          <h4 className="text-[14px] leading-[17px] font-bold tracking-[0.25px] mb-[10px]">
            Plug and Charge
          </h4>
          <p className="text-xs leading-[18px] font-normal gap-4 tracking-[.5px]">
            The new Plug & Charge function provides the most convenient public
            charging experience. Plug in your i5 at an Electrify America
            station, and your charging session will be automatically
            authenticated and initiated. Payment is processed only when the
            30-minute complimentary session has been exceeded.{' '}
            <span>
              <QuestionMarkCircleIcon className="inline-block w-4 h-4 text-[#727171] cursor-pointer" />
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BMWChargingPlugAndCharge
