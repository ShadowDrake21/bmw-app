import imgForwardThinkingFeature1 from '../assets/model-i5/forwardThinkingFeatures/FTFeatures1.png'
import imgForwardThinkingFeature2 from '../assets/model-i5/forwardThinkingFeatures/FTFeatures2.png'
import imgForwardThinkingFeature3 from '../assets/model-i5/forwardThinkingFeatures/FTFeatures3.png'

export interface IForwardThinkingFeaturesArray {
  array: IForwardThinkingFeatures[]
}

export interface IForwardThinkingFeatures {
  image: string
  title: string
  textInfo: {
    thereIsIcon: boolean
    textContent: string
  }
}

export const forwardThinkingFeaturesInfo: IForwardThinkingFeatures[] = [
  {
    image: imgForwardThinkingFeature1,
    title: 'Standard Active Blind Spot Detection',
    textInfo: {
      thereIsIcon: false,
      textContent:
        'Visual cues in exterior mirrors alert you to hazards in blind spots, with steering wheel vibration.',
    },
  },
  {
    image: imgForwardThinkingFeature2,
    title: 'Standard Lane Departure Warning',
    textInfo: {
      thereIsIcon: false,
      textContent:
        'If your BMW starts to stray from its lane, this automated system alerts you to get back on track.',
    },
  },
  {
    image: imgForwardThinkingFeature3,
    title: 'Available Highway Assistant',
    textInfo: {
      thereIsIcon: true,
      textContent:
        'Allows for hands-free driving at speeds up to 85 mph on controlled access highways. The driver must stay attentive and take over if needed.',
    },
  },
]
