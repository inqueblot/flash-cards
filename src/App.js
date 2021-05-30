import logo from './logo.svg';
import './App.css';
import Card from '../src/components/card'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Flash Cards</h1>
      </header>
      <div className="App-header">
        <Card />
      </div>

    </div>
  );
}

export default App;
