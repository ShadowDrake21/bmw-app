import React from 'react'
import { bestModelsInfo } from '../../static/componentsInfo'
import BestModelsItem from './BestModelsItem'

type Props = {}

const BestModels = (props: Props) => {
  return (
    <div>
      <div>
        {bestModelsInfo.map((bestModel, index) => (
          <BestModelsItem {...bestModel} key={index} />
        ))}
      </div>
    </div>
  )
}

export default BestModels
