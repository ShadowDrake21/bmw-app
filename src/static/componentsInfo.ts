import bestModel1Mobile from '../assets/main-page/bestModels/bestModel-1-Mobile.jpg'
import bestModel1Tablet from '../assets/main-page/bestModels/bestModel-1-Tablet.jpg'
import bestModel1Desktop from '../assets/main-page/bestModels/bestModel-1-Desktop.jpg'

import bestModel2Mobile from '../assets/main-page/bestModels/bestModel-2-Mobile.jpg'
import bestModel2Tablet from '../assets/main-page/bestModels/bestModel-2-Tablet.jpg'
import bestModel2Desktop from '../assets/main-page/bestModels/bestModel-2-Desktop.jpg'

import bestModel3Mobile from '../assets/main-page/bestModels/bestModel-3-Mobile.jpg'
import bestModel3Tablet from '../assets/main-page/bestModels/bestModel-3-Tablet.jpg'
import bestModel3Desktop from '../assets/main-page/bestModels/bestModel-3-Desktop.jpg'

import bestModel4Mobile from '../assets/main-page/bestModels/bestModel-4-Mobile.jpg'
import bestModel4Tablet from '../assets/main-page/bestModels/bestModel-4-Tablet.jpg'
import bestModel4Desktop from '../assets/main-page/bestModels/bestModel-4-Desktop.jpg'

export interface IBestModels {
  images: IImagesBestModels
  name: string
  description: string
  link: string
}

interface IImagesBestModels {
  mobile: string
  tablet: string
  desktop: string
}

export const bestModelsInfo: IBestModels[] = [
  {
    images: {
      mobile: bestModel1Mobile,
      tablet: bestModel1Tablet,
      desktop: bestModel1Desktop,
    },
    name: 'THE 2024 BMW iX',
    description: 'AN ELECTRIC FUTURE',
    link: '#',
  },
  {
    images: {
      mobile: bestModel2Mobile,
      tablet: bestModel2Tablet,
      desktop: bestModel2Desktop,
    },
    name: 'THE NEW 2024 BMW X5',
    description: 'LEAD WITH CONFIDENCE',
    link: '#',
  },
  {
    images: {
      mobile: bestModel3Mobile,
      tablet: bestModel3Tablet,
      desktop: bestModel3Desktop,
    },
    name: 'THE 2024 BMW X7',
    description: 'NEXT-LEVEL LUXURY',
    link: '#',
  },
  {
    images: {
      mobile: bestModel4Mobile,
      tablet: bestModel4Tablet,
      desktop: bestModel4Desktop,
    },
    name: 'THE 2024 BMW 8 SERIES',
    description: 'POWER AND PRESTIGE',
    link: '#',
  },
]
