import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SliderBlock from '../../components/SliderBlock/SliderBlock'
import {
  advantagesSliderPhotos,
  mainSliderPhotos,
} from '../../static/sliderItems'
import BestModels from '../../components/BestModels/BestModels'
import BuildBMWDreams from '../../components/BuildBMWDreams/BuildBMWDreams'
import { secondarySliderMainPage } from '../../static/customeSliderSettings'
import Ownership from '../../components/Ownership/Ownership'
import AllBMWModels from '../../components/AllBMWModels/AllBMWModels'
import FooterMenu from '../../components/FooterMenu/FooterMenu'
import Footer from '../../components/Footer/Footer'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <>
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
    </>
  )
}

export default HomePage
