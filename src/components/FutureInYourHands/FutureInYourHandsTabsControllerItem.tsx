import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { typesOfMedia } from '../../static/futureInYourHandsText'

const FutureInYourHandsTabsControllerItem = (item: any) => {
  return (
    <div className="tabs__content">
      <div>
        <div>
          {item.firstHalf?.type === typesOfMedia.Image ? (
            <img src={item.firstHalf?.src} alt="future is in your hands" />
          ) : (
            <video src={item.firstHalf?.src} />
          )}
        </div>
        <div>
          <h2>{item.secondHalf?.title}</h2>
          <p>
            {item.secondHalf?.textInfo.textContent}
            <span>
              {item.secondHalf?.textInfo.thereIsIcon && (
                <QuestionMarkCircleIcon className="w-4 h-4 text-[#727171] absolute right-0 top-1/2 -translate-y-1/2" />
              )}
            </span>
          </p>
          {item.secondHalf?.link.thereIsLink && (
            <a href={item.secondHalf?.link.url}>{item.secondHalf?.link.text}</a>
          )}
        </div>
      </div>
    </div>
  )
}

export default FutureInYourHandsTabsControllerItem
