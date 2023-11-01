import DesignFirstScreen from './DesignFirstScreen'
import DesignDetails from './DesignDetails'
import {
  designDetailsInfo,
  designFirstScreenInfo,
} from '../../static/designText'

type Props = {}

const Design = (props: Props) => {
  return (
    <section id="design" className="pt-10 sm:pt-60">
      <div>
        <DesignFirstScreen {...designFirstScreenInfo} />
        <DesignDetails {...designDetailsInfo} />
      </div>
    </section>
  )
}

export default Design
