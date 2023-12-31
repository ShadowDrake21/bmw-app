import { bestModelsInfo } from '../../static/bestModelsText'
import BestModelsItem from './BestModelsItem'

type Props = {}

const BestModels = (props: Props) => {
  return (
    <section className="pt-3 sm:mx-smallProcents sm:pt-9 sm:pb-14">
      <div className="flex flex-wrap gap-1 sm:grid sm:grid-cols-[auto_auto] sm:gap-10 xl:gap-11">
        {bestModelsInfo.map((bestModel, index) => (
          <BestModelsItem {...bestModel} key={index} />
        ))}
      </div>
    </section>
  )
}

export default BestModels
