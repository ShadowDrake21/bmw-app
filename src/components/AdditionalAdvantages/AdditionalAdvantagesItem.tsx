import { IAdditionalAdvantages } from '../../static/additionalAddvantagesText'

const AdditionalAdvantagesItem = ({
  image,
  title,
  text,
}: IAdditionalAdvantages) => {
  return (
    <div>
      <div className="mb-5">
        <img src={image} alt={title} className="object-cover w-full" />
      </div>
      <div className="text-[#221f1f] font-normal">
        <h3 className="text-xl leading-[26px] tracking-minusSX mb-[10px] sm:text-23 sm:leading-[31px] xl:text-28 xl:leading-[37px]">
          {title}
        </h3>
        <p className="tracking-0.5 text-sm sm:text-15 sm:leading-6 xl:text-base xl:leading-[26px]">
          {text}
        </p>
      </div>
    </div>
  )
}

export default AdditionalAdvantagesItem
