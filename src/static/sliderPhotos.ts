import smallPhoto1 from '@/assets/main-page/sliderMain/picture 1 2.jpg'
import smallPhoto2 from '@/assets/main-page/sliderMain/picture 2 2.jpg'
import smallPhoto3 from '@/assets/main-page/sliderMain/picture 3 2.jpg'
import smallPhoto4 from '@/assets/main-page/sliderMain/picture 4 2.jpg'
import smallPhoto5 from '@/assets/main-page/sliderMain/picture 5 2.jpg'

import mediumPhoto1 from '@/assets/main-page/sliderMain/picture 1 3.jpg'
import mediumPhoto2 from '@/assets/main-page/sliderMain/picture 2 3.jpg'
import mediumPhoto3 from '@/assets/main-page/sliderMain/picture 3 3.jpg'
import mediumPhoto4 from '@/assets/main-page/sliderMain/picture 4 3.jpg'
import mediumPhoto5 from '@/assets/main-page/sliderMain/picture 5 3.jpg'

import largePhoto1 from '@/assets/main-page/sliderMain/picture 1 1.jpg'
import largePhoto2 from '@/assets/main-page/sliderMain/picture 2 1.jpg'
import largePhoto3 from '@/assets/main-page/sliderMain/picture 3 1.jpg'
import largePhoto4 from '@/assets/main-page/sliderMain/picture 4 1.jpg'
import largePhoto5 from '@/assets/main-page/sliderMain/picture 5 1.jpg'

export interface ISlider {
  smallPhoto: string
  mediumPhoto: string
  largePhoto: string
}

export const mainSliderPhotos: ISlider[] = [
  {
    smallPhoto: smallPhoto1,
    mediumPhoto: mediumPhoto1,
    largePhoto: largePhoto1,
  },
  {
    smallPhoto: smallPhoto2,
    mediumPhoto: mediumPhoto2,
    largePhoto: largePhoto2,
  },
  {
    smallPhoto: smallPhoto3,
    mediumPhoto: mediumPhoto3,
    largePhoto: largePhoto3,
  },
  {
    smallPhoto: smallPhoto4,
    mediumPhoto: mediumPhoto4,
    largePhoto: largePhoto4,
  },
  {
    smallPhoto: smallPhoto5,
    mediumPhoto: mediumPhoto5,
    largePhoto: largePhoto5,
  },
]
