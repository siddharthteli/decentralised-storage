import logo from './logo.svg';
import './App.css';
import Selector  from './components/Selector.js';
import {ipfscaddstring} from './helpers/ipfs'
function App() {
  ipfscaddstring();
  return (
    <div className="App">
     <Selector/>
    </div>
  );
}

export default App;
