import './App.scss';
import Header2 from './components/Header2';
import Homepage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header2 />
      <div className="content-wrapper">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
