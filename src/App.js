import './App.css';

import CardsList from './components/CardsList';
import Header from './components/Header';
import ImageContainer from './components/ImageContainer';
import IntroComponent from './components/IntroComponent';

function App() {
  return (
    <div className="App">
      <Header />


      <CardsList />

      <IntroComponent />

      <ImageContainer />

    </div>
  );
}

export default App;
