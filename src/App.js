import './App.css';
import AppHeaderTop from './components/AppHeaderTop';
import AppHeaderSide from './components/AppHeaderSide';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <AppHeaderTop />
      <AppHeaderSide />
      <MainPage />
    </div>
  );
}

export default App;
