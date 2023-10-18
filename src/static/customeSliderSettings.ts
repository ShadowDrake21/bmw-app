export interface ISliderSettings {
  className: string
  textTitleClasses: string
  textDescrClasses: string
  positionClasses: string
}

export const secondarySliderMainPage: ISliderSettings = {
  className: 'pt-6 pb-3 sm:pt-0 sm:pb-0',
  textTitleClasses:
    'text-[20px] leading-[30px] sm:text-[23px] sm:leading-[31px] xl:text-[28px] xl:leading-[37px]',
  textDescrClasses: 'text-base',
  positionClasses: 'bottom-[25px] sm:top-[25px] xl:top-[70px] sm:max-w-[520px]',
}
