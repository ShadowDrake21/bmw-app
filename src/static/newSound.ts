import newSoundVideo from '../assets/model-i5/newSound/newSoundVideo.mp4'

export interface INewSound {
  video: string
  title: string
  text: string
}

export const newSoundInfo: INewSound = {
  video: newSoundVideo,
  title: 'THE NEW SOUND OF POWER',
  text: 'Created by legendary composer Hans Zimmer, the all-new i5 Sedan features an innovative soundscape designed to simulate and transcend the sound of an engine. Adapting to your driving situation in real-time, the experience is as powerful and electric as the vehicle itself.',
}
