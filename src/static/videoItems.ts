import firstScreenVideoURL from '../assets/model-i5/firstScreen/video_firstScreen.mp4'
import firstScreenIcon from '../assets/model-i5/firstScreen/firstScreenIcon.png'
import advantageVideoURL from '../assets/model-i5/advantageVideo/video_advantage.mp4'

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

export interface IAdvantageVideo {
  videoURL: string
  advantageType: string
  title: string
  text: string
  modelType: string
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

export const advantageVideoInfo = {
  videoURL: advantageVideoURL,
  advantageType: 'performance',
  title: 'TAKE CENTER STAGE',
  text: 'All-electric performance that captivates from start to finish. Energetic engineering, customizable drive modes, and all the torque you could ask for in a sleek midsize sedan.',
  modelType: 'European model shown',
}
