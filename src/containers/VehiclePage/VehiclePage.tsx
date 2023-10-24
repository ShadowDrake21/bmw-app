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
    </>
  )
}

export default VehiclePage
