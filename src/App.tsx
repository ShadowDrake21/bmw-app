import BestModels from './components/BestModels/BestModels'
import NavBar from './components/NavBar/NavBar'
import SliderBlock from './components/SliderBlock/SliderBlock'
import BuildBMWDreams from './components/BuildBMWDreams/BuildBMWDreams'
import { advantagesSliderPhotos, mainSliderPhotos } from './static/sliderItems'
import Ownership from './components/Ownership/Ownership'
import AllBMWModels from './components/AllBMWModels/AllBMWModels'

function App() {
  return (
    <main className="App">
      <NavBar />
      <SliderBlock array={mainSliderPhotos} />
      <BestModels />
      <BuildBMWDreams />
      <SliderBlock
        array={advantagesSliderPhotos}
        className="pt-6 pb-3"
        textTitleClasses="text-[20px] leading-[30px] sm:text-[23px] sm:leading-[31px] xl:text-[28px] xl:leading-[37px]"
        textDescrClasses="text-base"
        positionClasses="bottom-[25px] sm:top-[25px] xl:top-[70px] sm:max-w-[520px]"
      />
      <Ownership />
      <AllBMWModels />
    </main>
  )
}

export default App
