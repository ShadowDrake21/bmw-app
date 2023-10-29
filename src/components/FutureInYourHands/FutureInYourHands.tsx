import React from 'react'
import FutureInYourHandsTabsController from './FutureInYourHandsTabsController'
import { futureInYourHandsInfo } from '../../static/futureInYourHandsText'

type Props = {}

const FutureInYourHands = (props: Props) => {
  return (
    <section>
      <div>
        <div>
          <h4>the future is in your hands</h4>
          <p>
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
