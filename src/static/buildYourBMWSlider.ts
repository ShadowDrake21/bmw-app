import background1 from '../assets/model-i5/buildYourBMWSlider/slide1/buildYourBMWBackground1.jpg'
import auto1 from '../assets/model-i5/buildYourBMWSlider/slide1/buildYourBMWAuto1.png'
import icon1 from '../assets/model-i5/buildYourBMWSlider/slide1/buildYourBMWIcon1.png'
import preConfigPhoto1_1 from '../assets/model-i5/buildYourBMWSlider/slide1/buildYourBMWPreconfig1.jpg'
import preConfigPhoto1_2 from '../assets/model-i5/buildYourBMWSlider/slide1/buildYourBMWPreconfig2.jpg'
import preConfigPhoto1_3 from '../assets/model-i5/buildYourBMWSlider/slide1/buildYourBMWPreconfig3.jpg'
import preConfigPhoto1_4 from '../assets/model-i5/buildYourBMWSlider/slide1/buildYourBMWPreconfig4.jpg'
import background2 from '../assets/model-i5/buildYourBMWSlider/slide2/buildYourBMWBackground2.jpg'
import auto2 from '../assets/model-i5/buildYourBMWSlider/slide2/buildYourBMWAuto2.png'
import icon2 from '../assets/model-i5/buildYourBMWSlider/slide2/buildYourBMWIcon1.png'
import preConfigPhoto2_1 from '../assets/model-i5/buildYourBMWSlider/slide2/buildYourBMWPreconfig1.jpg'
import preConfigPhoto2_2 from '../assets/model-i5/buildYourBMWSlider/slide2/buildYourBMWPreconfig2.jpg'
import preConfigPhoto2_3 from '../assets/model-i5/buildYourBMWSlider/slide2/buildYourBMWPreconfig3.jpg'
import preConfigPhoto2_4 from '../assets/model-i5/buildYourBMWSlider/slide2/buildYourBMWPreconfig4.jpg'
import background3 from '../assets/model-i5/buildYourBMWSlider/slide3/buildYourBMWBackground3.jpg'
import auto3 from '../assets/model-i5/buildYourBMWSlider/slide3/buildYourBMWAuto3.png'
import icon3_1 from '../assets/model-i5/buildYourBMWSlider/slide3/buildYourBMWIcon1.png'
import icon3_2 from '../assets/model-i5/buildYourBMWSlider/slide3/buildYourBMWIcon2.png'
import preConfigPhoto3_1 from '../assets/model-i5/buildYourBMWSlider/slide3/buildYourBMWPreconfig1.jpg'
import preConfigPhoto3_2 from '../assets/model-i5/buildYourBMWSlider/slide3/buildYourBMWPreconfig2.jpg'
import preConfigPhoto3_3 from '../assets/model-i5/buildYourBMWSlider/slide3/buildYourBMWPreconfig3.jpg'
import preConfigPhoto3_4 from '../assets/model-i5/buildYourBMWSlider/slide3/buildYourBMWPreconfig4.jpg'

export interface IBuildYourBMWArray {
  items: IBuildYourBMW[]
}

export interface IBuildYourBMW {
  background: string
  icons: string[]
  carImg: string
  name: string
  adjective: string
  price: string
  speedInfo: string[]
  link: string
  additionalInfo: IBuildYourBMWAdditional
}

export interface IBuildYourBMWAdditional {
  preConfigText: string[]
  preConfigPhotos: string[]
}

export const buildYourBMWSliderInfo: IBuildYourBMW[] = [
  {
    background: background1,
    icons: [icon1],
    carImg: auto1,
    name: 'i5 eDRIVE40',
    adjective: 'Convenience',
    price: '$68,000',
    link: '#',
    speedInfo: ['295 MILES', '5.7 SEC'],
    additionalInfo: {
      preConfigText: ['Convenience Package', 'Sport Line'],
      preConfigPhotos: [
        preConfigPhoto1_1,
        preConfigPhoto1_2,
        preConfigPhoto1_3,
        preConfigPhoto1_4,
      ],
    },
  },
  {
    background: background2,
    icons: [icon2],
    carImg: auto2,
    name: 'i5 eDRIVE40',
    adjective: 'Sport',
    price: '$77,150',
    speedInfo: ['295 MILES', '5.7 SEC'],
    link: '#',
    additionalInfo: {
      preConfigText: [
        'M Sport Professional Package',
        'Driving Assistance Professional Package',
      ],
      preConfigPhotos: [
        preConfigPhoto2_1,
        preConfigPhoto2_2,
        preConfigPhoto2_3,
        preConfigPhoto2_4,
      ],
    },
  },
  {
    background: background3,
    icons: [icon3_1, icon3_2],
    carImg: auto3,
    name: 'i5 M60',
    adjective: 'Performance',
    price: '$88,600',
    speedInfo: ['256 MILES', '3.7 SEC'],
    link: '#',
    additionalInfo: {
      preConfigText: ['Executive Package', 'Sky Lounge Roof'],
      preConfigPhotos: [
        preConfigPhoto3_1,
        preConfigPhoto3_2,
        preConfigPhoto3_3,
        preConfigPhoto3_4,
      ],
    },
  },
]
