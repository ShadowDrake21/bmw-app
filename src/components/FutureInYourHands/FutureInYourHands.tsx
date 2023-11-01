import FutureInYourHandsTabsController from './FutureInYourHandsTabsController'
import { futureInYourHandsInfo } from '../../static/futureInYourHandsText'

type Props = {}

const FutureInYourHands = (props: Props) => {
  return (
    <section className="pt-[70px] pb-[60px] xl:pt-[90px] xl:pb-80">
      <div className="mx-smallProcents">
        <div className="font-normal text-center mb-10 mx-smallProcents sm:mx-normalProcents">
          <h4 className="uppercase text-2xl tracking-minusSX mb-[10px] sm:text-[30px] sm:leading-[38px]">
            the future is in your hands
          </h4>
          <p className="tracking-0.5 text-sm sm:text-15 sm:leading-6">
            In the 2024 BMW i5, the latest BMW driving technology is natural,
            personal, seamless – and completely at your beck and call.
          </p>
        </div>
        <div>
          <FutureInYourHandsTabsController array={futureInYourHandsInfo} />
        </div>
      </div>
    </section>
  )
}

export default FutureInYourHands
