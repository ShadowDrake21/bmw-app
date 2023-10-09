import mainSliderPhoto1 from '@/assets/main-page/sliderMain/picture 1 1.jpg'
import mainSliderPhoto2 from '@/assets/main-page/sliderMain/picture 2 1.jpg'
import mainSliderPhoto3 from '@/assets/main-page/sliderMain/picture 3 1.jpg'
import mainSliderPhoto4 from '@/assets/main-page/sliderMain/picture 4 1.jpg'
import mainSliderPhoto5 from '@/assets/main-page/sliderMain/picture 5 1.jpg'

export interface ISlider {
  photo: string
}

export const mainSliderPhotos: ISlider[] = [
  {
    photo: mainSliderPhoto1,
  },
  {
    photo: mainSliderPhoto2,
  },
  {
    photo: mainSliderPhoto3,
  },
  {
    photo: mainSliderPhoto4,
  },
  {
    photo: mainSliderPhoto5,
  },
]
