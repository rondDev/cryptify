import Header from '@/containers/header'
import NavBar from '@/containers/navbar'
import MainContent from '@/containers/maincontent'
import Image from 'next/image'

import { Barlow, Inter } from '@next/font/google';
import useGlobalState, { selectedState } from '@/components/createGlobalState';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [selected, setSelected] = useGlobalState(selectedState)
  return (
    <div
      className='h-full min-h-screen flex justify-center items-center body-container'
    >
      <div className='mainContainer'>
        <Header className='mainHeader'/>
          {selected ? <NavBar className='navBar w-[224px] h-[100%]' /> : null}
        <MainContent className='mainContent' />
      </div>
    </div>
  )
}
