import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import { memo } from 'react';

const Main = ({loggedIn}) => {
    return (
      <>
        <Header loggedIn={loggedIn}/>
        <main>
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </main>
        <Footer />
      </>
    )
  }
  
  export default memo(Main);