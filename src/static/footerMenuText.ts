import facebook from '../assets/main-page/socialMedia/facebook.png'
import twitter from '../assets/main-page/socialMedia/twitter.png'
import youtube from '../assets/main-page/socialMedia/youtube.png'
import instagram from '../assets/main-page/socialMedia/instagram.png'

export interface IFooterMenu {
  title: string
  secondLevel: IFooterMenuSecondLevel[]
}

export interface IFooterMenuSecondLevel {
  title: string
  link: string
  thereIsIcon: boolean
}

export const footerMenuInfo: IFooterMenu[] = [
  {
    title: 'The BMW Difference',
    secondLevel: [
      {
        title: 'My BMW App',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'BMW Individual',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'BMW All-Electric',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'Plug-in Hybrid Electric',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'Concept Vehicles',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'BMW ConnectedDrive',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'Remote Software Upgrades',
        link: '#',
        thereIsIcon: false,
      },
    ],
  },
  {
    title: 'Experience & Partneships',
    secondLevel: [
      {
        title: 'Performance Driving School',
        link: '#',
        thereIsIcon: true,
      },
      {
        title: 'Ultimate Driving Experience',
        link: '#',
        thereIsIcon: true,
      },
      {
        title: 'Performance Center Delivery',
        link: '#',
        thereIsIcon: true,
      },
      {
        title: 'M Track Days',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'BMW M Motorsport',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'BMW Championship',
        link: '#',
        thereIsIcon: true,
      },
      {
        title: 'Monticello Motor Club',
        link: '#',
        thereIsIcon: true,
      },
    ],
  },
  {
    title: 'Online Shopping Tools',
    secondLevel: [
      {
        title: 'Shop BMW Parts & Accessories',
        link: '#',
        thereIsIcon: true,
      },
      {
        title: 'Shop New Inventory',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'Shop Pre-Owned Inventory',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'Build Your Own',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'Shop Online',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'Access by BMW',
        link: '#',
        thereIsIcon: true,
      },
      {
        title: 'Lease & Financing Offers',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'Estimate Payment',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'Request a Test Drive',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'Contact a BMW Center',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'Find a BMW Center',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'Subscribe to Updates',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'Protection Products',
        link: '#',
        thereIsIcon: false,
      },
    ],
  },
  {
    title: 'Finance & Incentives',
    secondLevel: [
      {
        title: 'Apply for Financing',
        link: '#',
        thereIsIcon: true,
      },
      {
        title: 'BMW Financial Services',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'Manage Your BMW Financial Services Account',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'BMW Military Program',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'BMW Corporate Fleet Program',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'BMW Corporate Sales Program',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'BMW College Graduate Program',
        link: '#',
        thereIsIcon: false,
      },
      {
        title: 'BMW Mobility Program',
        link: '#',
        thereIsIcon: false,
      },
    ],
  },
]

interface ISocialMedia {
  image: string
  link: string
}

export const socialMedia: ISocialMedia[] = [
  {
    image: facebook,
    link: 'facebook.com',
  },
  {
    image: twitter,
    link: 'x.com',
  },
  {
    image: youtube,
    link: 'youtube.com',
  },
  {
    image: instagram,
    link: 'instagram.com',
  },
]
