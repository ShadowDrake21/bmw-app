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
  index: Number
  photos: ISliderPhotos
  texts: ISliderTexts
  links: Array<Object>
}

interface ISliderPhotos {
  smallPhoto: string
  mediumPhoto: string
  largePhoto: string
}

interface ISliderTexts {
  title: string
  description: string
}

export const mainSliderPhotos: ISlider[] = [
  {
    index: 1,
    photos: {
      smallPhoto: smallPhoto1,
      mediumPhoto: mediumPhoto1,
      largePhoto: largePhoto1,
    },
    texts: {
      title: 'The neue new',
      description: 'EXPERIENCE THE BMW VISION NEUE KLASSE',
    },
    links: [
      {
        text: 'Learn more',
        linkText: '#',
        color: 'blue',
      },
    ],
  },
  {
    index: 2,
    photos: {
      smallPhoto: smallPhoto2,
      mediumPhoto: mediumPhoto2,
      largePhoto: largePhoto2,
    },
    texts: {
      title: 'The neue new',
      description: 'EXPERIENCE THE BMW VISION NEUE KLASSE',
    },
    links: [
      {
        text: 'Learn more',
        linkText: '#',
        color: 'blue',
      },
    ],
  },
  {
    index: 3,
    photos: {
      smallPhoto: smallPhoto3,
      mediumPhoto: mediumPhoto3,
      largePhoto: largePhoto3,
    },
    texts: {
      title: 'The neue new',
      description: 'EXPERIENCE THE BMW VISION NEUE KLASSE',
    },
    links: [
      {
        text: 'Build Yours',
        linkText: '#',
        color: 'blue',
      },
      {
        text: 'Learn more',
        linkText: '#',
        color: 'white',
      },
    ],
  },
  {
    index: 4,
    photos: {
      smallPhoto: smallPhoto4,
      mediumPhoto: mediumPhoto4,
      largePhoto: largePhoto4,
    },
    texts: {
      title: 'The neue new',
      description: 'EXPERIENCE THE BMW VISION NEUE KLASSE',
    },
    links: [
      {
        text: 'Build Yours',
        linkText: '#',
        color: 'blue',
      },
      {
        text: 'Learn more',
        linkText: '#',
        color: 'white',
      },
    ],
  },
  {
    index: 5,
    photos: {
      smallPhoto: smallPhoto5,
      mediumPhoto: mediumPhoto5,
      largePhoto: largePhoto5,
    },
    texts: {
      title: 'The neue new',
      description: 'EXPERIENCE THE BMW VISION NEUE KLASSE',
    },
    links: [
      {
        text: 'Learn more',
        linkText: '#',
        color: 'blue',
      },
    ],
  },
]
