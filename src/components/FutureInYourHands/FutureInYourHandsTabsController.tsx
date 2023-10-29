import React, { useMemo, useState } from 'react'
import { IFutureInYourHandsArray } from '../../static/futureInYourHandsText'
import FutureInYourHandsTabsControllerItem from './FutureInYourHandsTabsControllerItem'
import Draggable from '../UI/Draggable/Draggable'

const FutureInYourHandsTabsController = ({
  array,
}: IFutureInYourHandsArray) => {
  const [activeTabId, setActiveTab] = useState(array[0].blockId)

  const activeTab = useMemo(
    () => array.find((tab) => tab.blockId === activeTabId),
    [activeTabId, array]
  )

  return (
    <div className="tabs">
      <Draggable rootClass="model__draggable">
        <ul className="tabs__nav flex items-center justify-center border-y border-b-[#cacaca] overflow-x-auto mb-5 sm:mb-10 xl:justify-center xl:cursor-default">
          {array.map((item, index) => (
            <li key={index} className="tabs__item">
              <button
                className={`first:pl-5 py-5 pr-5 w-full whitespace-nowrap text-xs tracking-[.25px] font-bold text-[#727171] capitalize transition-colors duration-200 hover:text-[#221f1f] sm:text-[13px] sm:leading-[16px] xl:text-base xl:leading-5 sm:py-6 xl:py-7 tabs__button ${
                  activeTabId === item.blockId ? 'active' : ''
                }`}
                onClick={() => setActiveTab(item.blockId)}
              >
                {item.blockName}
              </button>
            </li>
          ))}
        </ul>
      </Draggable>
      <FutureInYourHandsTabsControllerItem {...activeTab} />
    </div>
  )
}

export default FutureInYourHandsTabsController
