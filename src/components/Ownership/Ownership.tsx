import React from 'react'
import OwnershipItem from './OwnershipItem'
import { ownershipInfo } from '../../static/ownershipText'

type Props = {}

const Ownership = (props: Props) => {
  return (
    <div className="pt-10 pb-12 sm:pt-[60px] sm:pb-[80px] xl:pt-[80px] xl:pb-[100px]">
      <h3 className="text-xl tracking-[-0.1px] text-[#221f1f] text-center mb-[25px] sm:text-[23px] sm:leading-[31px] xl:text-[28px] xl:leading-[37px]">
        Ownership starts here.
      </h3>
      <div className="mx-[8%] sm:pt-[25px] xl:mx-[4%]">
        <div className="grid grid-cols-[auto_auto] gap-x-[4%] gap-y-[40px] sm:gap-y-[60px] sm:gap-x-[12%] xl:grid-cols-[auto_auto_auto_auto] xl:gap-x-[4%]">
          {ownershipInfo.map((ownership, index) => (
            <OwnershipItem {...ownership} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ownership
