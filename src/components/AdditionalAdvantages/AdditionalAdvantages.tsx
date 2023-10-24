import React from 'react'
import {
  IAdditionalAdvantages,
  IAdditionalAdvantagesArray,
} from '../../static/additionalAddvantagesText'
import AdditionalAdvantagesItem from './AdditionalAdvantagesItem'

const AdditionalAdvantages = ({ advantages }: IAdditionalAdvantagesArray) => {
  return (
    <section className="pb-[80px] sm:pb-[60px] xl:pb-[80px]">
      <div className="mx-[8%]">
        <div className="flex flex-col gap-10 sm:flex-row ">
          {advantages.map((advantage: IAdditionalAdvantages, index) => (
            <div key={index} className="w-full">
              <AdditionalAdvantagesItem {...advantage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdditionalAdvantages
