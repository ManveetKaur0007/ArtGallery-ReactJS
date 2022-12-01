import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {Routes, Route,} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/"  component={Home} />
          <Route path="/about"  component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;