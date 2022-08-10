import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={ <Home/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
