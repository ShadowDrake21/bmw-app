import dreamBMW1 from '../assets/main-page/buildBWMDreams/dreamBMW1.jpg'
import dreamBMW2 from '../assets/main-page/buildBWMDreams/dreamBMW2.jpg'
import dreamBMW3 from '../assets/main-page/buildBWMDreams/dreamBMW3.jpg'
import dreamBMW4 from '../assets/main-page/buildBWMDreams/dreamBMW4.jpg'

export interface IBuildBMWDreams {
  photo: string
  title: string
  link: string
}

export const buildBMWDreamsInfo: IBuildBMWDreams[] = [
  {
    photo: dreamBMW1,
    title: '3 Series Sedan',
    link: '#',
  },
  {
    photo: dreamBMW2,
    title: 'X3',
    link: '#',
  },
  {
    photo: dreamBMW3,
    title: '5 Series Sedan',
    link: '#',
  },
  {
    photo: dreamBMW4,
    title: 'X5',
    link: '#',
  },
]
