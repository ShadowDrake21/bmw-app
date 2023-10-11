import NavBar from './components/NavBar/NavBar'
import SliderBlock from './components/SliderBlock/SliderBlock'
import { mainSliderPhotos } from './static/sliderItems'

function App() {
  return (
    <main className="App">
      <NavBar />
      <SliderBlock array={mainSliderPhotos} />
    </main>
  )
}

export default App
