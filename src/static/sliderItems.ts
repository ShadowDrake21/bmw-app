import mainSmallPhoto1 from '@/assets/main-page/sliderMain/picture 1 2.jpg'
import mainSmallPhoto2 from '@/assets/main-page/sliderMain/picture 2 2.jpg'
import mainSmallPhoto3 from '@/assets/main-page/sliderMain/picture 3 2.jpg'
import mainSmallPhoto4 from '@/assets/main-page/sliderMain/picture 4 2.jpg'
import mainSmallPhoto5 from '@/assets/main-page/sliderMain/picture 5 2.jpg'

import advatnagesSmallPhoto1 from '@/assets/main-page/advantagesSlider/advantages-photo-1 mobile.jpg'
import advatnagesSmallPhoto2 from '@/assets/main-page/advantagesSlider/advantages-photo-2 mobile.jpg'
import advatnagesSmallPhoto3 from '@/assets/main-page/advantagesSlider/advantages-photo-3 mobile.jpg'
import advatnagesSmallPhoto4 from '@/assets/main-page/advantagesSlider/advantages-photo-4 mobile.jpg'
import advatnagesSmallPhoto5 from '@/assets/main-page/advantagesSlider/advantages-photo-5 mobile.jpg'
import advatnagesSmallPhoto6 from '@/assets/main-page/advantagesSlider/advantages-photo-6 mobile.jpg'

import mainMediumPhoto1 from '@/assets/main-page/sliderMain/picture 1 3.jpg'
import mainMediumPhoto2 from '@/assets/main-page/sliderMain/picture 2 3.jpg'
import mainMediumPhoto3 from '@/assets/main-page/sliderMain/picture 3 3.jpg'
import mainMediumPhoto4 from '@/assets/main-page/sliderMain/picture 4 3.jpg'
import mainMediumPhoto5 from '@/assets/main-page/sliderMain/picture 5 3.jpg'

import advatnagesMediumPhoto1 from '@/assets/main-page/advantagesSlider/advantages-photo-1 tablet.jpg'
import advatnagesMediumPhoto2 from '@/assets/main-page/advantagesSlider/advantages-photo-2 tablet.jpg'
import advatnagesMediumPhoto3 from '@/assets/main-page/advantagesSlider/advantages-photo-3 tablet.jpg'
import advatnagesMediumPhoto4 from '@/assets/main-page/advantagesSlider/advantages-photo-4 tablet.jpg'
import advatnagesMediumPhoto5 from '@/assets/main-page/advantagesSlider/advantages-photo-5 tablet.jpg'
import advatnagesMediumPhoto6 from '@/assets/main-page/advantagesSlider/advantages-photo-6 tablet.jpg'

import mainLargePhoto1 from '@/assets/main-page/sliderMain/picture 1 1.jpg'
import mainLargePhoto2 from '@/assets/main-page/sliderMain/picture 2 1.jpg'
import mainLargePhoto3 from '@/assets/main-page/sliderMain/picture 3 1.jpg'
import mainLargePhoto4 from '@/assets/main-page/sliderMain/picture 4 1.jpg'
import mainLargePhoto5 from '@/assets/main-page/sliderMain/picture 5 1.jpg'

import advatnagesLargePhoto1 from '@/assets/main-page/advantagesSlider/advantages-photo-1 desktop.jpg'
import advatnagesLargePhoto2 from '@/assets/main-page/advantagesSlider/advantages-photo-2 desktop.jpg'
import advatnagesLargePhoto3 from '@/assets/main-page/advantagesSlider/advantages-photo-3 desktop.jpg'
import advatnagesLargePhoto4 from '@/assets/main-page/advantagesSlider/advantages-photo-4 desktop.jpg'
import advatnagesLargePhoto5 from '@/assets/main-page/advantagesSlider/advantages-photo-5 desktop.jpg'
import advatnagesLargePhoto6 from '@/assets/main-page/advantagesSlider/advantages-photo-6 desktop.jpg'

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
      smallPhoto: mainSmallPhoto1,
      mediumPhoto: mainMediumPhoto1,
      largePhoto: mainLargePhoto1,
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
      smallPhoto: mainSmallPhoto2,
      mediumPhoto: mainMediumPhoto2,
      largePhoto: mainLargePhoto2,
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
      smallPhoto: mainSmallPhoto3,
      mediumPhoto: mainMediumPhoto3,
      largePhoto: mainLargePhoto3,
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
      smallPhoto: mainSmallPhoto4,
      mediumPhoto: mainMediumPhoto4,
      largePhoto: mainLargePhoto4,
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
      smallPhoto: mainSmallPhoto5,
      mediumPhoto: mainMediumPhoto5,
      largePhoto: mainLargePhoto5,
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

export const advantagesSliderPhotos: ISlider[] = [
  {
    index: 1,
    photos: {
      smallPhoto: advatnagesSmallPhoto1,
      mediumPhoto: advatnagesMediumPhoto1,
      largePhoto: advatnagesLargePhoto1,
    },
    texts: {
      title: 'THE BMW ACCESSORY CENTER',
      description: 'Customize your SUV before delivery.',
    },
    links: [
      {
        text: 'Learn more',
        linkText: '#',
        color: 'white',
      },
    ],
  },
  {
    index: 2,
    photos: {
      smallPhoto: advatnagesSmallPhoto2,
      mediumPhoto: advatnagesMediumPhoto2,
      largePhoto: advatnagesLargePhoto2,
    },
    texts: {
      title: 'DOWNLOAD THE NEW MY BMW APP',
      description: '',
    },
    links: [
      {
        text: 'Learn more',
        linkText: '#',
        color: 'white',
      },
    ],
  },
  {
    index: 3,
    photos: {
      smallPhoto: advatnagesSmallPhoto3,
      mediumPhoto: advatnagesMediumPhoto3,
      largePhoto: advatnagesLargePhoto3,
    },
    texts: {
      title: 'INTRODUCING BMW ULTIMATE CARE OIL SERVICES',
      description:
        '3 years prepaid for $225 for BMWs that have reached 60 months or 60,000 miles.',
    },
    links: [
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
      smallPhoto: advatnagesSmallPhoto4,
      mediumPhoto: advatnagesMediumPhoto4,
      largePhoto: advatnagesLargePhoto4,
    },
    texts: {
      title: 'DESIGNED FOR THE DRIVEN',
      description: 'Earn up to 5X POINTS on eligible purchases.',
    },
    links: [
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
      smallPhoto: advatnagesSmallPhoto5,
      mediumPhoto: advatnagesMediumPhoto5,
      largePhoto: advatnagesLargePhoto5,
    },
    texts: {
      title: 'PREMIUM PARTS & SERVICE POWERFUL VALUE',
      description: 'BMW VALUE SERVICE',
    },
    links: [
      {
        text: 'Learn more',
        linkText: '#',
        color: 'white',
      },
    ],
  },
  {
    index: 6,
    photos: {
      smallPhoto: advatnagesSmallPhoto6,
      mediumPhoto: advatnagesMediumPhoto6,
      largePhoto: advatnagesLargePhoto6,
    },
    texts: {
      title: 'REFRESH YOUR RIDE THIS SEASON',
      description:
        'Receive a $120 Prepaid Mastercard® when you buy four eligible Bridgestone, Michelin, or Pirelli tires. – OR – Receive an $80 Prepaid Mastercard® when you buy four eligible Dunlop or Goodyear tires. Limited time only. Now through December 31st.',
    },
    links: [
      {
        text: 'Learn more',
        linkText: '#',
        color: 'white',
      },
    ],
  },
]
