import React, { useMemo, useState } from 'react'
import { IFutureInYourHandsArray } from '../../static/futureInYourHandsText'
import FutureInYourHandsTabsControllerItem from './FutureInYourHandsTabsControllerItem'

const FutureInYourHandsTabsController = ({
  array,
}: IFutureInYourHandsArray) => {
  const [activeTabId, setActiveTab] = useState(array[0].blockId)

  const activeTab = useMemo(
    () => array.find((tab) => tab.blockId === activeTabId),
    [activeTabId, array]
  )

  return (
    <div className={`tabs`}>
      <ul className={`tabs__nav`}>
        {array.map((item, index) => (
          <li key={index} className="tabs__item">
            <button
              className={`tabs__button ${
                activeTabId === item.blockId ? 'active' : ''
              }`}
              onClick={() => setActiveTab(item.blockId)}
            >
              {item.blockName}
            </button>
          </li>
        ))}
      </ul>
      <FutureInYourHandsTabsControllerItem {...activeTab} />
    </div>
  )
}

export default FutureInYourHandsTabsController
