
import Nav from './Components/Navbar/Nav';
import { url } from 'inspector';
import dino from "./images/dino.png";
import Home from './Pages/Home/Home';
import Tech from './Pages/Tech/Tech';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <Tech></Tech>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
