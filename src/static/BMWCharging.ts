import img1 from '../assets/model-i5/BMWCharging/BMWCharging1.jpg'
import img2 from '../assets/model-i5/BMWCharging/BMWCharging2.jpg'
import img3 from '../assets/model-i5/BMWCharging/BMWCharging3.jpg'

export interface IBMWChargingArray {
  array: IBMWCharging[]
}

export interface IBMWCharging {
  img: string
  title: {
    titleText: string
    thereIsIcon: boolean
  }
  info: {
    infoText: string
    thereIsIcon: boolean
  }
  charging: {
    chargingText: string
    thereIsIcon: boolean
  }
  link: {
    thereIsLink: boolean
    linkText: string | undefined
    linkURL: string | undefined
  }
}

export const BMWChargingInfo: IBMWCharging[] = [
  {
    img: img1,
    title: {
      titleText: 'BMW Wallbox for convenient charging at home.',
      thereIsIcon: false,
    },
    info: {
      infoText:
        'The BMW Wallbox is the ultimate in electric convenience – a Level 2 charger that installs in your garage for rapid charging whenever you need it.',
      thereIsIcon: false,
    },
    charging: {
      chargingText: 'Charge from 0–100% in under 10 hours.',
      thereIsIcon: true,
    },
    link: {
      thereIsLink: true,
      linkText: 'Learn about Concierge Installation Service by Qmerit',
      linkURL: '#',
    },
  },
  {
    img: img2,
    title: {
      titleText:
        '2 years of complimentary on-the-go charging with Electrify America.',
      thereIsIcon: true,
    },
    info: {
      infoText:
        'Electrify America is the largest open DC Fast Charging network in the US. Enjoy two years of complimentary 30-minute charging sessions with your i5 at Electrify America stations.',
      thereIsIcon: true,
    },
    charging: {
      chargingText:
        'Add from 180 to 200 miles of range during a 30 minute charging session',
      thereIsIcon: true,
    },
    link: {
      thereIsLink: true,
      linkText: 'Find nearby Electrify America charging stations',
      linkURL: '#',
    },
  },
  {
    img: img3,
    title: {
      titleText: 'Convenient charging anywhere.',
      thereIsIcon: false,
    },
    info: {
      infoText:
        'Every BMW i5 comes equipped with the Flexible Fast Charger. This portable device, compatible with any 120V or 240V outlet, delivers optimized charging wherever you go.',
      thereIsIcon: false,
    },
    charging: {
      chargingText: 'Charge from 0–100% in under 10 hours at a 240V outlet.',
      thereIsIcon: true,
    },
    link: {
      thereIsLink: false,
      linkText: undefined,
      linkURL: undefined,
    },
  },
]
