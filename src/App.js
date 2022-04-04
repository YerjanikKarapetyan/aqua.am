import './App.css';
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className='MainPage'>
          <MainPage/>
      </div>
    </div>
  );
}

export default App;
