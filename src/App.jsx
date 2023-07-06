import React from "react";
import Header from "./Header.jsx";
import { Routes, Route } from "react-router-dom";
import Catalog from "./Catalog.jsx";
import Bag from "./Bag.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/bag" element={<Bag />} />
      </Routes>
    </div>
  );
}

export default App;
