import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { typesOfMedia } from '../../static/futureInYourHandsText'

const FutureInYourHandsTabsControllerItem = (item: any) => {
  return (
    <div>
      <div className="text-[#221f1f]">
        <div className="mb-5 w-full sm:mb-10">
          {item.firstHalf?.type === typesOfMedia.Image ? (
            <img
              src={item.firstHalf?.src}
              alt="future is in your hands"
              className="object-cover w-full"
            />
          ) : (
            <video
              src={item.firstHalf?.src}
              className="object-cover w-full"
              autoPlay
              loop
              muted
            />
          )}
        </div>
        <div className="font-normal sm:mx-normalProcents xl:mx-[12%]">
          <h2 className="text-xl tracking-minusSX mb-5 sm:text-23 sm:leading-[31px] xl:text-28 xl:leading-[37px]">
            {item.secondHalf?.title}
          </h2>
          <p className="text-sm tracking-0.5 sm:text-15 sm:leading-6 xl:text-base xl:leading-[26px]">
            {item.secondHalf?.textInfo.textContent}{' '}
            <span>
              {item.secondHalf?.textInfo.thereIsIcon && (
                <QuestionMarkCircleIcon className="inline-block w-4 h-4 text-[#727171]" />
              )}
            </span>
          </p>
          {item.secondHalf?.link.thereIsLink && (
            <a
              href={item.secondHalf?.link.url}
              className="text-sm tracking-0.5 font-bold capitalize border-b border-[#221f1f]  sm:text-15 sm:leading-6 xl:text-base xl:leading-[26px]"
            >
              {item.secondHalf?.link.text}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default FutureInYourHandsTabsControllerItem
