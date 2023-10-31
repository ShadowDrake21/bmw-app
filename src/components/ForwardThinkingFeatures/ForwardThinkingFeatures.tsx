import { IForwardThinkingFeaturesArray } from '../../static/forwardThinkingFeaturesText'
import ForwardThinkingFeaturesItem from './ForwardThinkingFeaturesItem'
import mainImageMobile from '../../assets/model-i5/forwardThinkingFeatures/FTFeaturesMainMobile.jpg'
import mainImageTablet from '../../assets/model-i5/forwardThinkingFeatures/FTFeaturesMainTablet.jpg'
import mainImageDesktop from '../../assets/model-i5/forwardThinkingFeatures/FTFeaturesMainDesktop.jpg'
import { useWindowDimensions } from '../../utils/utils'

const ForwardThinkingFeatures = ({ array }: IForwardThinkingFeaturesArray) => {
  const { width } = useWindowDimensions()

  return (
    <section id="safety-and-technology" className="pt-[60px] xl:pt-[80px]">
      <div>
        <div>
          <div className="mx-[8%] text-center relative z-10 text-[#221f1f] sm:mx-[14%] xl:mx-[18%]">
            <h2 className="text-[11px] leading-[13px] font-bold tracking-[2.75px] mb-[10px] xl:text-xs">
              SAFETY & TECHNOLOGY
            </h2>
            <h3 className="text-2xl leading-[30px] font-normal tracking-[-0.1px] mb-[10px] sm:text-[30px] sm:leading-[38px] xl:text-[39px] xl:leading-[48px]">
              FORWARD-THINKING FEATURES
            </h3>
            <p className="tracking-[0.5px] text-sm font-normal sm:text-[15px] sm:leading-6 xl:text-base xl:leading-[26px]">
              Standard safety technology in the 2024 BMW i5 allows you to
              navigate blind spots and other potential hazards with ease.
            </p>
          </div>
          <div className="-mt-[180px]">
            <img
              className="object-cover w-full"
              src={
                width < 768
                  ? mainImageMobile
                  : width >= 1280
                  ? mainImageDesktop
                  : mainImageTablet
              }
              alt="best-model-img"
            />
          </div>
        </div>
        <div className="bg-[#F6F6F6] px-[8%] pt-10 flex flex-col gap-10 pb-[60px] sm:flex-row sm:px-[12%] sm:gap-[8%] xl:pb-[80px] xl:pt-[50px] xl:px-[12%]">
          {array.map((item, index) => (
            <ForwardThinkingFeaturesItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ForwardThinkingFeatures
