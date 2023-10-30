import firstScreenVideo from '../assets/model-i5/design/designVideo.mp4'
import details1Mobile from '../assets/model-i5/design/designPhoto1Mobile.jpg'
import details1Tablet from '../assets/model-i5/design/designPhoto1Tablet.jpg'
import details1Desktop from '../assets/model-i5/design/designPhoto1Desktop.jpg'
import details2Mobile from '../assets/model-i5/design/designPhoto2Mobile.jpg'
import details2Tablet from '../assets/model-i5/design/designPhoto2Tablet.jpg'
import details2Desktop from '../assets/model-i5/design/designPhoto2Desktop.jpg'

export interface IDesignFirstScreen {
  video: string
  textData: { type: string; title: string; text: string }
}

export interface IDesignDetails {
  images: IDetailsImages[]
  textContent: ITextContent[]
}

interface IDetailsImages {
  imageMobile: string
  imageTablet: string
  imageDesktop: string
}

interface ITextContent {
  title: string
  text: string
}

export const designFirstScreenInfo: IDesignFirstScreen = {
  video: firstScreenVideo,
  textData: {
    type: 'design',
    title: 'game-changing modernity',
    text: 'Designed to be as innovative as you. The first-ever all-electric BMW i5 projects strength and elegance with its precise contours and pared-back athleticism, exuding a balanced aesthetic. The interior is clear, focused, and minimalist, creating an impression of lightness – while lingering on a note of luxury.',
  },
}

export const designDetailsInfo: IDesignDetails = {
  images: [
    {
      imageMobile: details1Mobile,
      imageTablet: details1Tablet,
      imageDesktop: details1Desktop,
    },
    {
      imageMobile: details2Mobile,
      imageTablet: details2Tablet,
      imageDesktop: details2Desktop,
    },
  ],
  textContent: [
    {
      title: 'Luminous.',
      text: 'The headlights and slim rear taillights have a fresh modern appeal, while the available Illuminated Kidney Grille sets the scene with its unique radiance.',
    },
    {
      title: 'Striking.',
      text: 'Make a strong statement with aerodynamic wheel designs in up to 21” available – and always show up in style.',
    },
    {
      title: 'Interactive.',
      text: 'The BMW Curved Display provides driving data and infotainment in a large screen spanning the dashboard. Reacting to your inputs, the faceted Interaction Bar is a marvel of crystalline aesthetics and smart functionality.',
    },
    {
      title: 'Expansive.',
      text: 'Choose between the standard moonroof, which creates a sensation of openness, or the available full-glass Sky Lounge Roof that stretches from front to back, giving the i5 a dynamic, low-slung look from the side.',
    },
  ],
}
