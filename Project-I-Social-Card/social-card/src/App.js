import React from 'react'
import './App.css'
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail'
import HeaderTitle from './components/HeaderComponents/HeaderTitle'
import CardBanner from './components/CardComponents/CardBanner'
import CardContent from './components/CardComponents/CardContent'
import Footer from './components/FooterComponents/Footer'


const App = () => {
  return (
    <div>
      <div className="headers">
        <ImageThumbnail />
        <HeaderTitle />
        </div>
        <div className="card1">
        <CardBanner />
        <CardContent />
        </div>
        <div className="card3">
          <Footer />
        </div>
    </div>
  );
};

export default App;
