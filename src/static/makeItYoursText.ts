import leaseOfferIcon from '../assets/model-i5/makeItYours/lease_offer-svg.svg'
import photo1Mobile from '../assets/model-i5/makeItYours/MakeItYours-01-Mobile.jpg'
import photo1Tablet from '../assets/model-i5/makeItYours/MakeItYours-01-Tablet.jpg'
import photo1Desktop from '../assets/model-i5/makeItYours/MakeItYours-01-Desktop.jpg'
import photo2Mobile from '../assets/model-i5/makeItYours/MakeItYours-02-Mobile.jpg'
import photo2Tablet from '../assets/model-i5/makeItYours/MakeItYours-02-Tablet.jpg'
import photo2Desktop from '../assets/model-i5/makeItYours/MakeItYours-02-Desktop.jpg'
import photo3Mobile from '../assets/model-i5/makeItYours/MakeItYours-03-Mobile.jpg'
import photo3Tablet from '../assets/model-i5/makeItYours/MakeItYours-03-Tablet.jpg'
import photo3Desktop from '../assets/model-i5/makeItYours/MakeItYours-03-Desktop.jpg'
import photo4Mobile from '../assets/model-i5/makeItYours/MakeItYours-04-Mobile.jpg'
import photo4Tablet from '../assets/model-i5/makeItYours/MakeItYours-04-Tablet.jpg'
import photo4Desktop from '../assets/model-i5/makeItYours/MakeItYours-04-Desktop.jpg'

export interface IMakeItYours {
  textContent: {
    type: string
    title: string
    leaseOfferInfo: {
      icon: string
      price: string
      description: string
      importantInfoLink: string
    }
    links: {
      allOffers: {
        text: string
        link: string
      }
      buildYours: {
        text: string
        link: string
      }
      contactDealer: {
        text: string
        link: string
      }
    }
  }
  photoContent: IMakeItYoursPhotos[]
}

export interface IMakeItYoursPhotos {
  photoMobile: string
  photoTablet: string
  photoDesktop: string
}

export const makeItYoursInfo: IMakeItYours = {
  textContent: {
    type: 'MAKE IT YOURS',
    title: 'EXPERIENCE THE BMW i5',
    leaseOfferInfo: {
      icon: leaseOfferIcon,
      price: '$719',
      description: '36 months; $6,529 due at signing',
      importantInfoLink: '#',
    },
    links: {
      allOffers: {
        text: 'view all offers',
        link: '#',
      },
      buildYours: {
        text: 'build yours',
        link: '#',
      },
      contactDealer: {
        text: 'contact dealer',
        link: '#',
      },
    },
  },
  photoContent: [
    {
      photoMobile: photo1Mobile,
      photoTablet: photo1Tablet,
      photoDesktop: photo1Desktop,
    },
    {
      photoMobile: photo2Mobile,
      photoTablet: photo2Tablet,
      photoDesktop: photo2Desktop,
    },
    {
      photoMobile: photo3Mobile,
      photoTablet: photo3Tablet,
      photoDesktop: photo3Desktop,
    },
    {
      photoMobile: photo4Mobile,
      photoTablet: photo4Tablet,
      photoDesktop: photo4Desktop,
    },
  ],
}
