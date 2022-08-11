import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={ <Home/>}></Route>
          <Route path="/search" element={ <Search/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
