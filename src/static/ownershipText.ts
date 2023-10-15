import imageTradeIn from '../assets/main-page/ownership/Trade-In-Value.png'
import imageCreditScore from '../assets/main-page/ownership/Credit-Score.png'
import imageApply from '../assets/main-page/ownership/Apply-For-Financing.png'
import imageStayConnected from '../assets/main-page/ownership/Stay-Connected.png'

export interface IOwnership {
  image: string
  title: string
  description: string
  linkText: string
  link: string
  thereIsIcon: boolean
}

export const ownershipInfo = [
  {
    image: imageTradeIn,
    title: 'Trade-In Value',
    description:
      'Get the latest information on your vehicle’s trade-in value today.',
    linkText: 'Visit Black Book',
    link: '#',
    thereIsIcon: true,
  },
  {
    image: imageCreditScore,
    title: 'Check Your Credit Score',
    description: 'See where you stand on your journey to owning a BMW.',
    linkText: 'Visit Equifax',
    link: '#',
    thereIsIcon: true,
  },
  {
    image: imageApply,
    title: 'Apply for Financing',
    description: 'Own the BMW of your dreams with BMW Financial Services.',
    linkText: 'Get Started',
    link: '#',
    thereIsIcon: true,
  },
  {
    image: imageStayConnected,
    title: 'Stay Connected',
    description: 'Receive the latest offers, releases, and news from BMW.',
    linkText: 'Sign Up Now',
    link: '#',
    thereIsIcon: false,
  },
]
