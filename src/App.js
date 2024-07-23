import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './Navbar';
import './App.css';
import AvailableMovies from './pages/Home';
import Footer from './footer';
import Your_movies from './pages/Your-movies';
import Profile from './pages/Profile';

function App() {
  let component
  switch (window.location.pathname) {
    case '/':
      component = <App/>
    case '/':
      component = <AvailableMovies />
      break;
    case '/your-movies':
      component = <Your_movies/>
      break;
    case '/profile':
      component = <Profile/>
      break
  }
  return (
    <>
    <Navbar />
    {component}
    <Footer />
    </>
    
  );
}

export default App;
