/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Header from '@/containers/header';
import NavBar from '@/containers/navbar';
import MainContent from '@/containers/maincontent';

import useGlobalState, { selectedState } from '@/components/createGlobalState';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [selected] = useGlobalState(selectedState);
  return (
    <div
      className="h-full min-h-screen flex justify-center items-center body-container"
    >
      <div className="mainContainer">
        <Header className={`${selected ? 'selectedHeader' : 'mainHeader'}`} />
        <div className={`${selected ? 'contentDiv' : null}`}>
          {selected ? <NavBar className="navBar" /> : null}
          <MainContent className={`${selected ? 'converterSelected' : 'mainContent '}`} />
        </div>

      </div>
    </div>
  );
}
