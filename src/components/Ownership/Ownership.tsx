import { useRef } from 'react'
import OwnershipItem from './OwnershipItem'
import { ownershipInfo } from '../../static/ownershipText'
import { useInView } from 'framer-motion'
import { getMotionStyles } from '../../utils/utils'

type Props = {}

const Ownership = (props: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section ref={ref}>
      <div
        style={getMotionStyles(isInView)}
        className="pt-10 pb-12 sm:pt-60 sm:pb-80 xl:pt-80 xl:pb-[100px]"
      >
        <h3 className="text-xl tracking-minusSX text-[#221f1f] text-center mb-[25px] sm:text-23 sm:leading-[31px] xl:text-28 xl:leading-[37px]">
          Ownership starts here.
        </h3>
        <div className="mx-normalProcents sm:pt-[25px] xl:mx-smallProcents">
          <div className="grid grid-cols-[auto_auto] gap-x-[4%] gap-y-[40px] sm:gap-y-[60px] sm:gap-x-[12%] xl:grid-cols-[auto_auto_auto_auto] xl:gap-x-[4%]">
            {ownershipInfo.map((ownership, index) => (
              <OwnershipItem {...ownership} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ownership
