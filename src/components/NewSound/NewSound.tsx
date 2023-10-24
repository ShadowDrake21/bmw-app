import { INewSound } from '../../static/newSound'

const NewSound = (newSoundInfo: INewSound) => {
  const { video, title, text } = newSoundInfo
  return (
    <section className="bg-new-sound bg-center py-10 xl:py-[50px]">
      <div className="mx-[8%]">
        <div className="sm:flex sm:items-center">
          <div className="font-normal mb-10 sm:mb-0">
            <h3 className="text-xl tracking-[-.1px] mb-[10px] text-white sm:text-[23px] sm:leading-[31px] xl:text-[28px] xl:leading-[37px]">
              {title}
            </h3>
            <div className="w-[85%]">
              <p className="text-[#f6f6f6] tracking-[0.5px] text-sm sm:text-[15px] sm:leading-6 xl:text-base xl:leading-[26px]">
                {text}
              </p>
            </div>
          </div>
          <div>
            <video className="w-full h-auto" src={video} controls loop />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewSound
