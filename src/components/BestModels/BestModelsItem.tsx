import { IBestModels } from '../../static/bestModelsText'
import { useWindowDimensions } from '../../utils/utils'

const BestModelsItem = (model: IBestModels) => {
  const { width } = useWindowDimensions()
  const { images, name, description, link } = model
  const { desktop, tablet, mobile } = images
  return (
    <div className="relative w-full">
      <div className="absolute bottom-[40px] left-0 right-0 text-center z-30 sm:bottom-4">
        <h5 className="text-11 font-bold leading-3 tracking-2.75 text-white mb-[2px] xl:text-xs">
          {name}
        </h5>
        <h3 className="text-white text-xl tracking-minusSX font-normal mb-1 sm:text-23 sm:leading-[31px] xl:text-28 xl:leading-[37px] sm:mb-2">
          {description}
        </h3>
        <a
          href={link}
          className="text-[#cacaca] text-sm font-light transition-all duration-150 hover:text-white underline"
        >
          Learn more
        </a>
      </div>
      <img
        className="object-cover w-full"
        src={width < 768 ? mobile : width >= 1280 ? desktop : tablet}
        alt="best-model-img"
      />
    </div>
  )
}

export default BestModelsItem
