import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Genres from "./pages/Genres";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  const [userSearch, setUserSearch] = useState()

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={ <Home setUserSearch={setUserSearch}/>}></Route>
          <Route path="/search" element={ <Search userSearch={userSearch}/>}></Route>
          <Route path="/genres" element={ <Genres />} ></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
