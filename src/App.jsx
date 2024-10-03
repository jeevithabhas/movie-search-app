import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import MovieList from "./components/MovieList"; 
import MovieDetail from "./components/MovieDetail"; 
import "./App.css"; 

function App() {
  const [isFaded, setIsFaded] = useState(false);

  return (
    <Router>
      <div className="relative w-full h-full bg-blend-lighten ">
        
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            isFaded ? "opacity-20" : "opacity-20"
          }`}
          style={{ backgroundImage: "url('/movies2.jpg')" }} 
        />

        
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route
              path="/movie/:id"
              element={<MovieDetail setIsFaded={setIsFaded} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
