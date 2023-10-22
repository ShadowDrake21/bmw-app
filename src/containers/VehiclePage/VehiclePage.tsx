import React from 'react'
import VehicleFirstScreen from '../../components/VehicleFirstScreen/VehicleFirstScreen'
import { firstScreenInfo } from '../../static/videoItems'
import AnchorLinks from '../../components/AnchorLinks/AnchorLinks'
import VehicleModels from '../../components/VehicleModels/VehicleModels'

type Props = {}

const VehiclePage = (props: Props) => {
  return (
    <>
      <VehicleFirstScreen {...firstScreenInfo} />
      <AnchorLinks />
      <VehicleModels />
    </>
  )
}

export default VehiclePage
