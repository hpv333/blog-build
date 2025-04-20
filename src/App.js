import logo from './logo.svg';
import './App.scss';
import Resume from './components/Resume';
import Header from './components/Header';
import Header2 from './components/Header2';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Homepage from './pages/HomePage'
import Profile_image from './components/Profile_imageHC/Profile_image';
function App() {
  return (
    <div className="App">
      <Header2 />
      <div className="content-wrapper">
        <Homepage />
        {/* <Profile_image /> */}

      </div>
    </div>
  );
}

export default App;
