import React from 'react'
import VehicleFirstScreen from '../../components/VehicleFirstScreen/VehicleFirstScreen'
import { advantageVideoInfo, firstScreenInfo } from '../../static/videoItems'
import AnchorLinks from '../../components/AnchorLinks/AnchorLinks'
import VehicleModels from '../../components/VehicleModels/VehicleModels'
import AdvantageVideo from '../../components/AdvantageVideo/AdvantageVideo'

type Props = {}

const VehiclePage = (props: Props) => {
  return (
    <>
      <VehicleFirstScreen {...firstScreenInfo} />
      <AnchorLinks />
      <VehicleModels />
      <AdvantageVideo {...advantageVideoInfo} />
    </>
  )
}

export default VehiclePage
