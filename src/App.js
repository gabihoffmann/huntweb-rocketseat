import React from 'react';
import Routes from './routes';
//Style
import './styles.css'
//Components
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Header />
    <Routes/>
    <Footer/>
  </div>
);

export default App;
