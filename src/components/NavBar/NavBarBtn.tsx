import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: any
  addClasses: string
}

const NavBarBtn = ({ children, addClasses }: Props) => {
  return (
    <button
      className={`${addClasses} h-full transition relative hover:before:content-[''] hover:before:bottom-0 hover:before:left-0 hover:before:absolute hover:before:w-full hover:before:h-[3px] hover:before:bg-[#1C69D4] flex-col justify-center`}
    >
      {children}
    </button>
  )
}

export default NavBarBtn
