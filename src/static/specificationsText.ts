export interface ISpecifications {
  value: string
  title: string
  isThereIcon: boolean
}

export const specificationsInfo: ISpecifications[] = [
  {
    value: '3.7 s',
    title: '0-60 MPH',
    isThereIcon: true,
  },
  {
    value: '586',
    title: 'LB-FT TORQUE',
    isThereIcon: false,
  },
  {
    value: '593',
    title: 'MAXIMUM HORSEPOWER',
    isThereIcon: false,
  },
  {
    value: 'All-Wheel Drive',
    title: 'DUAL MOTOR',
    isThereIcon: false,
  },
]
