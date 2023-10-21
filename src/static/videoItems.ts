import firstScreenVideoURL from '../assets/model-i5/firstScreen/video_firstScreen.mp4'
import firstScreenIcon from '../assets/model-i5/firstScreen/firstScreenIcon.png'

export interface IFirstScreenVideo {
  videoURL: string
  mainTitle: string
  mainDescription: string
  btnText: string
  btnLink: string
  icon: string
  secondaryDescription: string
  laserOfferPrice: string
  laserOfferDescription: string
  importantInfoLink: string
}

export const firstScreenInfo: IFirstScreenVideo = {
  videoURL: firstScreenVideoURL,
  mainTitle: 'THE i5',
  mainDescription: 'THE 2024 BMW i5 ELECTRIC VEHICLE',
  btnText: 'Build Yours',
  btnLink: '#',
  icon: firstScreenIcon,
  secondaryDescription: 'i5 eDrive40 shown.',
  laserOfferPrice: '$749',
  laserOfferDescription: '36 months; $6,649 due at signing',
  importantInfoLink: '#',
}
