import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 class="text-6xl font-bold text-lime-500">
        Wolcome To My Pricing Club!
      </h1>
      <Pricing></Pricing>

    </div>
  );
}

export default App;
