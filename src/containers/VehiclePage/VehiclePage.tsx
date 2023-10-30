import React from 'react'
import VehicleFirstScreen from '../../components/VehicleFirstScreen/VehicleFirstScreen'
import { advantageVideoInfo, firstScreenInfo } from '../../static/videoItems'
import AnchorLinks from '../../components/AnchorLinks/AnchorLinks'
import VehicleModels from '../../components/VehicleModels/VehicleModels'
import AdvantageVideo from '../../components/AdvantageVideo/AdvantageVideo'
import Specifications from '../../components/Specifications/Specifications'
import AdditionalAdvantages from '../../components/AdditionalAdvantages/AdditionalAdvantages'
import { additionalAdvantagesInfo } from '../../static/additionalAddvantagesText'
import NewSound from '../../components/NewSound/NewSound'
import { newSoundInfo } from '../../static/newSound'
import BuildYourBMW from '../../components/BuildYourBMW/BuildYourBMW'
import UnlimitedHorizons from '../../components/UnlimitedHorizons/UnlimitedHorizons'
import BMWCharging from '../../components/BMWCharging/BMWCharging'
import { BMWChargingInfo } from '../../static/BMWCharging'
import ForwardThinkingFeatures from '../../components/ForwardThinkingFeatures/ForwardThinkingFeatures'
import { forwardThinkingFeaturesInfo } from '../../static/forwardThinkingFeaturesText'
import FutureInYourHands from '../../components/FutureInYourHands/FutureInYourHands'
import Design from '../../components/Design/Design'

type Props = {}

const VehiclePage = (props: Props) => {
  return (
    <>
      <VehicleFirstScreen {...firstScreenInfo} />
      <AnchorLinks />
      <VehicleModels />
      <AdvantageVideo {...advantageVideoInfo} />
      <Specifications />
      <AdditionalAdvantages advantages={additionalAdvantagesInfo} />
      <NewSound {...newSoundInfo} />
      <BuildYourBMW />
      <UnlimitedHorizons />
      <BMWCharging array={BMWChargingInfo} />
      <ForwardThinkingFeatures array={forwardThinkingFeaturesInfo} />
      <FutureInYourHands />
      <Design />
    </>
  )
}

export default VehiclePage
