import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { BMWSeriesInfo } from '../../static/BMWSeriesText'
import Draggable from '../UI/Draggable/Draggable'

type Props = {}

const AllBMWModels = (props: Props) => {
  return (
    <div className="border-t border-[#e6e6e6]">
      <div className="text-center py-4">
        <a
          href="#"
          className="relative inline-block pr-5 text-[#262626] transition duration-200 hover:text-[#1c69d4] sm:hidden"
        >
          <span className="text-base leading-5 break-words font-bold ">
            All BMW Models
          </span>
          <ChevronRightIcon className="absolute w-5 h-5 right-0 top-[2px]" />
        </a>
        <div className="hidden items-center ml-9 mr-11 py-2 sm:flex xl:mx-[5.25rem]">
          <span className="whitespace-nowrap uppercase text-[0.625rem] font-light leading-3 text-[#262626] w-auto mr-7">
            select a series
          </span>
          <Draggable rootClass="model__draggable">
            <ul className="models__list flex items-center gap-8 overflow-x-auto">
              {BMWSeriesInfo.map(({ name, link }, index) => (
                <li key={index} className="text-sm font-bold whitespace-nowrap">
                  <a
                    className="transition-all duration-200 hover:text-[#1c69d4]"
                    href={link}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </Draggable>
        </div>
      </div>
    </div>
  )
}

export default AllBMWModels
