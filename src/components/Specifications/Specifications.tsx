import {
  ISpecifications,
  specificationsInfo,
} from '../../static/specificationsText'
import SpecificationItem from './SpecificationItem'

type Props = {}

const Specifications = (item: Props) => {
  return (
    <section className="py-10 xl:py-[50px]">
      <div className="mx-normalProcents text-[#221f1f]">
        <div className="max-w-[70%] pb-[10px] xl:pb-[15px]">
          <h3 className="text-11 leading-[13px] tracking-2.75 uppercase xl:text-xs">
            SPECIFICATIONS BASED ON THE 2024 BMW i5 M60
          </h3>
        </div>
        <ul className="flex flex-wrap justify-between gap-y-5 xl:flex-nowrap">
          {specificationsInfo.map(
            (specificationItem: ISpecifications, index) => (
              <li key={index} className="w-[50%] xl:w-full">
                <SpecificationItem {...specificationItem} />
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  )
}

export default Specifications
