import React from 'react'
import { IBestModels } from '../../static/componentsInfo'
import { useWindowDimensions } from '../../utils/utils'

type Props = {}

const BestModelsItem = (model: IBestModels) => {
  const { width } = useWindowDimensions()
  const { images, name, description, link } = model
  const { desktop, tablet, mobile } = images
  return (
    <div>
      <img
        src={width < 768 ? mobile : width >= 1280 ? desktop : tablet}
        alt="best-model-img"
      />
    </div>
  )
}

export default BestModelsItem
