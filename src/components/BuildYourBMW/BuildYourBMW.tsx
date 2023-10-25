import BuildYourBMWSlider from './BuildYourBMWSlider'
import { buildYourBMWSliderInfo } from '../../static/buildYourBMWSlider'

type Props = {}

const BuildYourBMW = (props: Props) => {
  return (
    <section>
      <div>
        <div>
          <div>
            <h2>SELECTED STARTS</h2>
            <h3>BUILD YOUR BMW</h3>
            <div>
              <p>
                Here's an easy way to get the best of BMW. We've already added
                some popular features to these BMW i5 models – you get to choose
                the rest.
              </p>
            </div>
            <a href="#">Start Your Build</a>
          </div>
          <div>
            <a href="#">Compare All</a>
          </div>
        </div>
        <div>
          <BuildYourBMWSlider items={buildYourBMWSliderInfo} />
        </div>
      </div>
    </section>
  )
}

export default BuildYourBMW
