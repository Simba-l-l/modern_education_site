import logo from './logo.svg'
import Nav from './components/navbar.jsx'
import Content from './components/content';
import './index.css'
import {rComents} from './firebase'

global.coments =[] 

function App() {
  {rComents()}
  return (
    <div className="App">
      {Nav()}
      {Content()}
    </div>
  );
}

export default App;
