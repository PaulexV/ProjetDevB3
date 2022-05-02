import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './Components/Header/Header.js'
import CardDisplay from './Components/CardDisplay/CardDisplay';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <CardDisplay />
    
    </div>
  );
}

export default App;

