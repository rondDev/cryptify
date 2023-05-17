import Header from '@/containers/header'
import NavBar from '@/containers/navbar'
import MainContent from '@/containers/maincontent'
import Image from 'next/image'

import useGlobalState, { selectedState } from '@/components/createGlobalState';

import { Barlow, Inter } from '@next/font/google';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [selected, _] = useGlobalState(selectedState)
  return (
    <div
      className='h-full min-h-screen flex justify-center items-center body-container'
    >
      <div className='mainContainer'>
        <Header className={`${selected ? 'selectedHeader' : 'mainHeader'}`}/>
        <div className={`${selected ? 'contentDiv' : null}`}>
          {selected ? <NavBar className='navBar' /> : null}
          <MainContent className={`${selected ? 'converterSelected' : 'mainContent '}`} />
        </div>
          
      </div>
    </div>
  )
}
