import logo from './logo.svg';
import './App.css';
import Resume from './components/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Homepage from './pages/HomePage'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
        <Homepage/>
     {/* <Resume />  */}
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
