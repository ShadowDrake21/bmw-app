import futureInYourHandsVideo from '../assets/model-i5/futureInYourHands/futureInYourHandsVideo1.mp4'
import futureInYourHandsPhoto1 from '../assets/model-i5/futureInYourHands/futureInYourHandsPhoto1.jpg'
import futureInYourHandsPhoto2 from '../assets/model-i5/futureInYourHands/futureInYourHandsPhoto2.jpg'
import futureInYourHandsPhoto3 from '../assets/model-i5/futureInYourHands/futureInYourHandsPhoto3.jpg'

export enum typesOfMedia {
  Image,
  Video,
}

export interface IFutureInYourHandsArray {
  array: IFutureInYourHands[]
}

export interface IFutureInYourHands {
  blockId: Number
  blockName: string
  firstHalf: {
    type: typesOfMedia.Image | typesOfMedia.Video
    src: string
  }
  secondHalf: {
    title: string
    textInfo: {
      textContent: string
      thereIsIcon: boolean
    }
    link: {
      thereIsLink: boolean
      text: string | undefined
      url: string | undefined
    }
  }
}

export const futureInYourHandsInfo: IFutureInYourHands[] = [
  {
    blockId: 1,
    blockName: 'intelligent-systems',
    firstHalf: {
      type: typesOfMedia.Video,
      src: futureInYourHandsVideo,
    },
    secondHalf: {
      title: 'Always engaged.',
      textInfo: {
        textContent:
          'The standard iDrive 8.5 Operating System provides advanced onboard technology. Enjoy your apps with standard wireless Apple CarPlay® and Android Auto™. Activated by voice, BMW Intelligent Personal Assistant gets smarter with every interaction.',
        thereIsIcon: false,
      },
      link: {
        thereIsLink: false,
        text: undefined,
        url: undefined,
      },
    },
  },
  {
    blockId: 2,
    blockName: 'gaming-and-streaming',
    firstHalf: {
      type: typesOfMedia.Image,
      src: futureInYourHandsPhoto1,
    },
    secondHalf: {
      title: "Gamer's gambit",
      textInfo: {
        textContent:
          'A gaming console integrated into the BMW Curved Display, AirConsole offers an exciting selection of games. Use your smartphone as a game controller to experience the joy of gaming – or access YouTube for complete video streaming while parked.',
        thereIsIcon: false,
      },
      link: {
        thereIsLink: false,
        text: undefined,
        url: undefined,
      },
    },
  },
  {
    blockId: 3,
    blockName: 'my-bmw-app',
    firstHalf: {
      type: typesOfMedia.Image,
      src: futureInYourHandsPhoto2,
    },
    secondHalf: {
      title: 'Digital ease.',
      textInfo: {
        textContent:
          'BMW Digital Key Plus lets you lock and unlock doors and start up your i5, without even taking your compatible smartphone out of your pocket. Check vehicle status, send destinations, set charging times, pre-condition and more – all via the My BMW App. Feel another level of convenience and safety with available Anti-Theft Recorder – which immediately notifies you in My BMW App when the alarm sets off, capturing video from the surrounding area.',
        thereIsIcon: true,
      },
      link: {
        thereIsLink: true,
        text: 'learn more',
        url: '#',
      },
    },
  },
  {
    blockId: 4,
    blockName: 'perfected-parking',
    firstHalf: {
      type: typesOfMedia.Image,
      src: futureInYourHandsPhoto3,
    },
    secondHalf: {
      title: 'State-of-the-art parking.',
      textInfo: {
        textContent:
          "Add the available Parking Assistant Plus for BMW's most advanced parking technology. It includes features such as Parking Assistant for maneuvering into tight spaces, Back-up Assistant for automated reversing, and Surround View Cameras for viewing a 3D image of your vehicle and surroundings – which offers easy viewing from the My BMW App.",
        thereIsIcon: false,
      },
      link: {
        thereIsLink: false,
        text: undefined,
        url: undefined,
      },
    },
  },
]
