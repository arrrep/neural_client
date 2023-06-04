import React from 'react' 
import { MainpageHeader } from '../components/MainPage/MainpageHeader/MainpageHeader'
import { ClientsBlock } from '../components/MainPage/ClientsBlock/ClientsBlock'
import { MainpageFeatures } from '../components/MainPage/MainpageFeatures/MainpageFeatures'
import { MainpageServices } from '../components/MainPage/MainpageServices/MainpageServices'
import { TarifHelper } from '../components/MainPage/TariffHelper/TariffHelper'
import { Footer } from '../components/Utils/Footer/Footer'

export const Mainpage: React.FC = () => {
  return (
    <>
      <MainpageHeader />
      <ClientsBlock />
      <MainpageFeatures />
      <MainpageServices />
      <TarifHelper />
      <Footer />
    </>
  )
}


