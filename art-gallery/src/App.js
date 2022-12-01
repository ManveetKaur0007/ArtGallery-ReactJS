import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route,} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/work" exact component={Work} />
          <Route path="/contact" exact component={Contact} />
      </Router>
    </div>
  );
}

export default App;