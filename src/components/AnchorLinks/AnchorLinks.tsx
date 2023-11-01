import AnchorLink from 'react-anchor-link-smooth-scroll'
import Draggable from '../UI/Draggable/Draggable'
import { anchorLinksInfo } from '../../static/anchorLinks'
import { ArrowLongDownIcon } from '@heroicons/react/24/solid'

type Props = {}

const AnchorLinks = (props: Props) => {
  return (
    <section className="bg-[#f6f6f6]">
      <Draggable rootClass="model__draggable">
        <ul className="flex items-center gap-8 overflow-x-auto py-5 sm:py-6 xl:py-7 xl:justify-center xl:cursor-default">
          {anchorLinksInfo.map(({ href, text }, index) => (
            <li key={index} className="first:pl-[6%] pr-[6%]">
              <AnchorLink
                href={href}
                className="inline-block relative whitespace-nowrap text-sm tracking-0.25 font-bold text-[#4c4c4c] capitalize pr-[15px] transition-colors duration-300 hover:text-[#1c69d3] sm:text-15 sm:leading-[18px] xl:text-base xl:leading-5"
              >
                {text}
                <ArrowLongDownIcon className="absolute w-[15px] right-0 top-[2px] text-[#1c69d3]" />
              </AnchorLink>
            </li>
          ))}
        </ul>
      </Draggable>
    </section>
  )
}

export default AnchorLinks
