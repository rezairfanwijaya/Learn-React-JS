import logo from './logo.svg';
import Welcome, {WelcomeH2} from './components/welcome/Welcome';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Welcome/>
      <WelcomeH2 text="Ini Welcome h2 pertama"/>
      <WelcomeH2 text = "Ini Welcome h2 kedua"/>
    </div>
  );
}

export default App;
