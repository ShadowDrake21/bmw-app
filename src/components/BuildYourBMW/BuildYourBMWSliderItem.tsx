import { IBuildYourBMW } from '../../static/buildYourBMWSlider'

const BuildYourBMWSliderItem = (item: IBuildYourBMW) => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h3>{item.name}</h3>
            <h4>{item.adjective}</h4>
            <p>
              MSRP as Built <span>{item.price}</span>
            </p>
          </div>
          <div>
            <img src={item.carImg} alt={item.name} />
          </div>
        </div>
        <div>
          <ul>
            {item.additionalInfo.preConfigPhotos.map((photo) => (
              <li>
                <img src={photo} alt="preConfig" />
              </li>
            ))}
          </ul>
          <ul>
            {item.additionalInfo.preConfigText.map((text) => (
              <li>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div>
            <a href={item.link}>Start building</a>
          </div>
          <div>
            <p>
              range:<span>{item.range}</span>
            </p>
            <p>
              0-60 mph:<span>{item.acceleration}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuildYourBMWSliderItem
