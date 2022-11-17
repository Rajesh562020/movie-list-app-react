
//import './App.css';
//import companyLogo from './images/avatar.jpg';
import MovieCardDisplay from "./components/MovieCardDisplay.js";
import Nav from "./components/Nav.js";
import Top from './components/Top.js';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Top/>
      <MovieCardDisplay/>
      
    </div>
  );
}

export default App;
