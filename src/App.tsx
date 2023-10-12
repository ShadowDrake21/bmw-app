import BestModels from './components/BestModels/BestModels'
import NavBar from './components/NavBar/NavBar'
import SliderBlock from './components/SliderBlock/SliderBlock'
import BuildBMWDreams from './components/BuildBMWDreams/BuildBMWDreams'
import { mainSliderPhotos } from './static/sliderItems'

function App() {
  return (
    <main className="App">
      <NavBar />
      <SliderBlock array={mainSliderPhotos} />
      <BestModels />
      <BuildBMWDreams />
    </main>
  )
}

export default App
