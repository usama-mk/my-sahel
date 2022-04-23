import './App.css';
import AboutEvent from './pages/AboutEvent/AboutEvent';
import LandingPage from './pages/LandingPage/LandingPage';
import NftBlockchain from './pages/NftBlockchain/NftBlockchain';
import WhyNeedsYou from './pages/WhyNeedsYou/WhyNeedsYou';
import { Routes, Route, Link } from "react-router-dom";
import Artists from './pages/Artists/Artists';
import ArtExhibition from './pages/ArtExhibition/ArtExhibition';

function App() {
  return (
    <div className="App  2xl:pt-5">
      {/* <LandingPage/> */}
      {/* <WhyNeedsYou/> */}
      {/* <NftBlockchain/> */}
      {/* <AboutEvent/> */}
      
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="needs-you" element={<WhyNeedsYou/>} />
        <Route path="nfts-blockchain" element={<NftBlockchain/>} />
        <Route path="about-events" element={<AboutEvent/>} />
        <Route path="artists" element={<Artists/>} />
        <Route path="art-exhibition" element={<ArtExhibition/>} />
      </Routes>
    </div>
  );
}

export default App;
