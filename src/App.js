import './App.css';
import Navbar from './header/Navbar';
import Footer from './footer/footer';
import Container from './maincontent/container';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='FoodContainer'>
      <Container/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
