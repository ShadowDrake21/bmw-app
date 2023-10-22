import React from 'react'
import VehicleFirstScreen from '../../components/VehicleFirstScreen/VehicleFirstScreen'
import { firstScreenInfo } from '../../static/videoItems'
import AnchorLinks from '../../components/AnchorLinks/AnchorLinks'

type Props = {}

const VehiclePage = (props: Props) => {
  return (
    <>
      <VehicleFirstScreen {...firstScreenInfo} />
      <AnchorLinks />
    </>
  )
}

export default VehiclePage
