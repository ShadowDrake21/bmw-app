import { footerMenuInfo, socialMedia } from '../../static/footerMenuText'
import FooterMenuList from './FooterMenuList'

type Props = {}

const FooterMenu = (props: Props) => {
  return (
    <div className="py-12 bg-[#F6F6F6] xl:pt-20">
      <div className="mx-4 xl:mx-9">
        <div className="sm:grid sm:grid-cols-2 xl:grid-cols-4 xl:grid-flow-col">
          {footerMenuInfo.map((menuItem) => (
            <FooterMenuList key={menuItem.title} {...menuItem} />
          ))}
        </div>
        <div className="ml-[8%] pt-8 sm:mx-9">
          <ul className="flex gap-3">
            {socialMedia.map(({ image, link }, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noreferrer">
                  <img src={image} alt="socialMedia" className="w-7 h-7" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FooterMenu
