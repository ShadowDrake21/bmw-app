import { IAtGlance, IAtGlanceItem } from '../../static/atGlance'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

const AtGlance = (object: IAtGlance) => {
  const { title, itemsFirstPart, itemsSecondPart } = object

  const getQuestionMarkIcon = () => {
    return (
      <QuestionMarkCircleIcon className="inline-block w-4 h-4 text-[#727171] cursor-pointer" />
    )
  }

  const getItems = (part: IAtGlanceItem[]) => {
    return part.map(({ titleInfo, textInfo }: IAtGlanceItem, index) => (
      <div key={index}>
        <h3 className="text-base leading-5 tracking-minusSX font-bold mb-[5px] sm:text-[18px] sm:leading-[22px] xl:text-xl xl:leading-6">
          {titleInfo.title} {titleInfo.thereIsIcon && getQuestionMarkIcon()}
        </h3>
        <div>
          {textInfo.text.map((textItem, index) => (
            <p
              key={index}
              className="text-sm font-normal tracking-0.5 sm:text-15 sm:leading-6 xl:text-base xl:leading-[26px]"
            >
              {textItem} {textInfo.thereIsIcon && getQuestionMarkIcon()}
            </p>
          ))}
        </div>
      </div>
    ))
  }

  const itemsStyles =
    'flex flex-col gap-[15px] sm:flex-[50%] sm:gap-5 xl:gap-[25px]'
  return (
    <section className="py-80 bg-[#F6F6F6] xl:py-[100px]">
      <div className="mx-normalProcents text-[#221f1f] sm:mx-[12%]">
        <h2 className="text-xl tracking-minusSX font-normal mb-5 sm:text-23 sm:leading-[31px] sm:mb-10 xl:text-28 xl:leading-[37px] xl:mb-[50px]">
          {title}
        </h2>
        <div className="flex flex-col sm:flex-row sm:gap-[8%]">
          <div className={`${itemsStyles}`}>{getItems(itemsFirstPart)}</div>
          <div className={`${itemsStyles}`}>{getItems(itemsSecondPart)}</div>
        </div>
      </div>
    </section>
  )
}

export default AtGlance
