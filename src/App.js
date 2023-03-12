import './App.css';
import Navbar from './header/Navbar';
import Footer from './footer/footer';
import Container from './maincontent/container';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='FoodContainer'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
