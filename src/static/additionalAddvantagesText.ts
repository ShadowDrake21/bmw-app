import advantage1 from '../assets/model-i5/additionalAdvantages/advantage1-small.jpg'
import advantage2 from '../assets/model-i5/additionalAdvantages/advantage2-small.jpg'

export interface IAdditionalAdvantagesArray {
  advantages: IAdditionalAdvantages[]
}

export interface IAdditionalAdvantages {
  image: string
  title: string
  text: string
}

export const additionalAdvantagesInfo: IAdditionalAdvantages[] = [
  {
    image: advantage1,
    title: 'Engineered for dynamism.',
    text: 'The i5 is built for balance, responsiveness, and nimble steering. The low-mounted battery results in a low center of gravity and optimal body rigidity.',
  },
  {
    image: advantage2,
    title: 'All about you.',
    text: 'Enhance all your senses with My Modes – including Personal, Sport, Efficient, Expressive, Relax, and Digital Art. Each mode is designed so you can adapt your drive to match your mood and driving style – creating an immersive ambience.',
  },
]
