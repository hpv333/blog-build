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
      <header className="App-header">
       <Header2/>
        <Homepage/>
        <br/>
        <br/>
     {/* <Resume />  */}
    <Profile_image/>
       <Footer/>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
