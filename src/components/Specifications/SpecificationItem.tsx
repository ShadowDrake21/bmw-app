import { useRef } from 'react'
import { ISpecifications } from '../../static/specificationsText'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { getMotionStyles } from '../../utils/utils'
import { useInView } from 'framer-motion'

const SpecificationItem = (specificationItem: ISpecifications) => {
  const { value, title, isThereIcon } = specificationItem
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="w-full xl:w-max" ref={ref}>
      <div
        className="px-5 relative before:absolute before:content-[''] before:h-full before:w-[1px] before:bg-[#262626] before:top-0 before:left-0"
        style={getMotionStyles(isInView)}
      >
        <p className="text-2xl leading-[30px] tracking-[-0.1px] font-normal sm:text-[30px] sm:leading-[38px] xl:text-[39px] xl:leading-[48px]">
          {value}
        </p>
        <div className="max-w-fit relative pr-4">
          <h4
            className={`${
              isThereIcon && 'py-3'
            } w-full text-[11px] leading-[13px] tracking-[2.75px] pt-1 font-normal xl:text-xs xl:pt-2`}
          >
            {title}
          </h4>
          {isThereIcon && (
            <QuestionMarkCircleIcon className="w-[14px] h-[14px] absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  )
}

export default SpecificationItem
