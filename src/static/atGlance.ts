export interface IAtGlance {
  title: string
  itemsFirstPart: IAtGlanceItem[]
  itemsSecondPart: IAtGlanceItem[]
}

export interface IAtGlanceItem {
  titleInfo: {
    title: string
    thereIsIcon: boolean
  }
  textInfo: {
    text: string[]
    thereIsIcon: boolean
  }
}

export const atGlanceInfo: IAtGlance = {
  title: 'THE i5 AT A GLANCE',
  itemsFirstPart: [
    {
      titleInfo: {
        title: 'What is the range of the BMW i5?',
        thereIsIcon: false,
      },
      textInfo: {
        text: [
          'The BMW i5 Sedan models offer impressive range – from 270 to 295 miles in the i5 eDrive40, and from 240 to 256 miles in the i5 M60 when driving under ideal conditions.',
        ],
        thereIsIcon: true,
      },
    },
    {
      titleInfo: {
        title: 'Does the BMW i5 have regenerative braking?',
        thereIsIcon: false,
      },
      textInfo: {
        text: [
          'Yes. The BMW i5 Sedan models have regenerative braking, so that power can be recovered from deceleration. Regenerative braking allows more of your electric vehicle’s range to be extended. BMW’s range-increasing technology includes two Energy Recuperation Modes, so you can tailor your driving experience exactly as you want. Put it in driving position “D” for a seamless feel, similar to the braking experience in a typical gas-powered vehicle. In this mode, the vehicle’s sensors dynamically adjust the level of energy recuperation. Or put it in active driving position “B” for the maximum amount of recuperation each time the accelerator is released. This mode allows for virtually no use of the brake pedal in urban traffic.',
        ],
        thereIsIcon: false,
      },
    },
    {
      titleInfo: {
        title: 'How long does a BMW i5 require for charging?',
        thereIsIcon: false,
      },
      textInfo: {
        text: [
          'The amount of time required to charge a BMW i5 Sedan varies depending on the power source. Using a 240V outlet with the standard Flexible Fast Charger or available BMW Wallbox, the BMW i5 can charge from 0-100% in less than 10 hours. Or, with a public DC Fast Charger, 100 miles of range can be added – with 10 minutes of charging (i5 eDrive40), or 11 minutes of charging  (i5 M60).',
        ],
        thereIsIcon: false,
      },
    },
    {
      titleInfo: {
        title: 'Is the BMW i5 all-wheel drive?',
        thereIsIcon: false,
      },
      textInfo: {
        text: [
          'The BMW i5 M60 is an all-wheel drive electric vehicle with dual electric motors providing power to the four wheels independently. The BMW i5 eDrive40 is a rear-wheel drive electric vehicle with a characteristically sporty feel.',
        ],
        thereIsIcon: false,
      },
    },
    {
      titleInfo: {
        title: 'What is the battery warranty for the BMW i5?',
        thereIsIcon: false,
      },
      textInfo: {
        text: [
          'Every BMW electric vehicle comes with premium maintenance services provided by a nationwide dealer network and an 8-year/100,000-mile battery warranty.',
        ],
        thereIsIcon: true,
      },
    },
  ],
  itemsSecondPart: [
    {
      titleInfo: {
        title: 'Do wheel and tire sizes affect the range on my i5?',
        thereIsIcon: false,
      },
      textInfo: {
        text: [
          'Wheel size and design, as well as tire type and width, play an important role in the electric range of your BMW i5. An aerodynamically designed wheel, combined with a lower rolling resistance tire type, will increase your electric range. Explore different wheel and tire combinations and see how they affect range in Build Your Own, or contact your local BMW Center.',
        ],
        thereIsIcon: false,
      },
    },
    {
      titleInfo: {
        title: 'Price, Dimensions & Horsepower',
        thereIsIcon: false,
      },
      textInfo: {
        text: [
          'MSRP: From $66,800',
          'Dimensions: From 199.2" L x 74.8" W x 59.3" H',
          'Horsepower: Up to 593 hp',
        ],
        thereIsIcon: true,
      },
    },
    {
      titleInfo: {
        title: 'Motor & Drivetrain Variants',
        thereIsIcon: false,
      },
      textInfo: {
        text: [
          '• Single electric motor, rear-wheel drive (i5 eDrive40)',
          '• Dual electric motor, all-wheel drive (i5 M60)',
        ],
        thereIsIcon: false,
      },
    },
    {
      titleInfo: {
        title: 'Range',
        thereIsIcon: true,
      },
      textInfo: {
        text: [
          'i5 eDrive40: From 270 to 295 miles',
          'i5 M60: From 240 to 256 miles',
        ],
        thereIsIcon: false,
      },
    },
  ],
}
