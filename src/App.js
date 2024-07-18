import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Navigation from './navigation';
import Header from './header';
import AvailableMovies from './available-movies';
import Footer from './footer';

function App() {
  return (
    <>
    <Header />
    <Navigation />
    <AvailableMovies />
    <Footer />
    </>
    
  );
}

export default App;
