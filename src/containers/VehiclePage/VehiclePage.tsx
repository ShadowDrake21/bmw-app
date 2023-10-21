import React from 'react'
import VehicleFirstScreen from '../../components/VehicleFirstScreen/VehicleFirstScreen'
import { firstScreenInfo } from '../../static/videoItems'

type Props = {}

const VehiclePage = (props: Props) => {
  return (
    <>
      <VehicleFirstScreen {...firstScreenInfo} />
    </>
  )
}

export default VehiclePage
