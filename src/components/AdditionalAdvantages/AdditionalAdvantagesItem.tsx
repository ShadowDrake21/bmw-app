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
        <h3 className="text-xl leading-[26px] tracking-[-0.1px] mb-[10px] sm:text-[23px] sm:leading-[31px] xl:text-[28px] xl:leading-[37px]">
          {title}
        </h3>
        <p className="tracking-[0.5px] text-sm sm:text-15px sm:leading-6 xl:text-base xl:leading-[26px]">
          {text}
        </p>
      </div>
    </div>
  )
}

export default AdditionalAdvantagesItem
