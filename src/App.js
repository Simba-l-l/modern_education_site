import logo from './logo.svg';
import Nav from './components/navbar.jsx'
import Content  from './components/content';

function App() {
  return (
    <div className="App">
        {Nav()}
        {Content()}
    </div>
  );
}

export default App;
