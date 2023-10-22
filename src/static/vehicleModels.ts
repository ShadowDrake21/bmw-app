import auto1 from '../assets/model-i5/vehicleModels/auto1.png'
import auto1Hover from '../assets/model-i5/vehicleModels/auto1-hover.png'
import auto2 from '../assets/model-i5/vehicleModels/auto2.png'
import auto2Hover from '../assets/model-i5/vehicleModels/auto2-hover.png'

import highIcon1 from '../assets/model-i5/vehicleModels/highIcon1.png'
import highIcon2 from '../assets/model-i5/vehicleModels/highIcon2.png'

export interface IVehicleModels {
  highImage: string
  highText: string
  carPhoto: string
  carHoverPhoto: string
  name: string
  price: string
  mainLink: string
  secondaryLink: string
}

export const vehicleModelsInfo: IVehicleModels[] = [
  {
    highImage: highIcon1,
    highText: 'electric',
    carPhoto: auto1,
    carHoverPhoto: auto1Hover,
    name: 'i5 eDrive40',
    price: 'Starting MSRP $66,800',
    mainLink: '#',
    secondaryLink: '#',
  },
  {
    highImage: highIcon2,
    highText: 'electric',
    carPhoto: auto2,
    carHoverPhoto: auto2Hover,
    name: 'i5 M60',
    price: 'Starting MSRP $84,100',
    mainLink: '#',
    secondaryLink: '#',
  },
]
