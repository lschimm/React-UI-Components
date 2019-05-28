import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';

const App = () => {
  return (
    <div>
      <ImageThumbnail />
      <h3>Lambda School</h3>
      <HeaderContainer />
      <HeaderTitle />
      <p>
        Begin by exploring the `components` directory. You'll notice we have a
        few files that we've already included in there to get you started right
        away building components. You'll need to make sure you include your
        components that you build in this file to watch your app come to life
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.import HeaderTitle from './components/HeaderComponents/HeaderTitle';

        </strong>
      </p>
    </div>
  );
};

export default App;
