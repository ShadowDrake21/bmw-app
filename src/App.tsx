import BestModels from './components/BestModels/BestModels'
import NavBar from './components/NavBar/NavBar'
import SliderBlock from './components/SliderBlock/SliderBlock'
import BuildBMWDreams from './components/BuildBMWDreams/BuildBMWDreams'
import { advantagesSliderPhotos, mainSliderPhotos } from './static/sliderItems'
import Ownership from './components/Ownership/Ownership'
import AllBMWModels from './components/AllBMWModels/AllBMWModels'
import FooterMenu from './components/FooterMenu/FooterMenu'
import Footer from './components/Footer/Footer'
import { secondarySliderMainPage } from './static/customeSliderSettings'

function App() {
  return (
    <main className="App">
      <NavBar />
      <SliderBlock array={mainSliderPhotos} />
      <BestModels />
      <BuildBMWDreams />
      <SliderBlock
        array={advantagesSliderPhotos}
        sliderSettings={secondarySliderMainPage}
      />
      <Ownership />
      <AllBMWModels />
      <FooterMenu />
      <Footer />
    </main>
  )
}

export default App
