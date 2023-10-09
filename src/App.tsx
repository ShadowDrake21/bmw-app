import NavBar from './components/NavBar/NavBar'
import SliderBlock from './components/SliderBlock/SliderBlock'
import { mainSliderPhotos } from './static/sliderPhotos'

function App() {
  return (
    <div className="App">
      <NavBar />
      <SliderBlock array={mainSliderPhotos} />
    </div>
  )
}

export default App
