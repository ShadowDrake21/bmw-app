import BestModels from './components/BestModels/BestModels'
import BestModelsItem from './components/BestModels/BestModelsItem'
import NavBar from './components/NavBar/NavBar'
import SliderBlock from './components/SliderBlock/SliderBlock'
import { mainSliderPhotos } from './static/sliderItems'

function App() {
  return (
    <main className="App">
      <NavBar />
      <SliderBlock array={mainSliderPhotos} />
      <BestModels />
    </main>
  )
}

export default App
