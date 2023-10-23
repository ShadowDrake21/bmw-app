import React from 'react'
import { IAdvantageVideo } from '../../static/videoItems'

const AdvantageVideo = (advantageVideo: IAdvantageVideo) => {
  const { videoURL, advantageType, title, text, modelType } = advantageVideo
  return (
    <div className="relative">
      <div>
        <video
          src={videoURL}
          autoPlay
          loop
          muted
          className="min-h-[500px] object-cover w-full"
        />
      </div>
      <div className="bg-black w-full relative video__shadow xl:absolute xl:bottom-0 xl:bg-transparent xl:before:relative">
        <div className="mx-[8%] pt-6 pb-[65px] sm:pt-8 sm:flex sm:justify-between">
          <div className="text-white uppercase sm:max-w-[40%] xl:max-w-[50%]">
            <p className="relative z-10 text-[11px] leading-[13px] font-bold tracking-[2.75px] mb-5 sm:mb-[10px] xl:text-xs">
              {advantageType}
            </p>
            <h4 className="text-2xl leading-[30px] tracking-[-0.1px] font-normal sm:text-[30px] sm:leading-[38px] xl:text-[39px] xl:leading-[48px]">
              {title}
            </h4>
          </div>
          <div className="sm:max-w-[40%] xl:max-w-[50%]">
            <p className="text-[#f6f6f6] tracking-[0.5px] text-sm font-normal sm:text-[15px] sm:leading-6 xl:text-base xl:leading-[26px]">
              {text}
            </p>
          </div>
        </div>
      </div>
      <span className="text-[#f6f6f6] text-[11px] leading-[13px] font-normal tracking-[0.25px] absolute bottom-5 right-10 xl:right-[8%] xl:bottom-7">
        {modelType}
      </span>
    </div>
  )
}

export default AdvantageVideo
