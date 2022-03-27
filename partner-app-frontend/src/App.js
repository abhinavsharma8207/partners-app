import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/landing";
import Layout from "./components/layout";
import Geo from "./components/geolocation";
import AddPartner from "./components/addpartner";
import RangeFilterPartner from "./components/rangefilterpartner";
import React, { useState } from "react";
import Coordinates from "./components/coordinates";

function App() {
  const changeTheme = (e) => {
    toggleBodyClass("dark");
  };

  const toggleBodyClass = (className) =>
    document.body.classList.toggle(className);

  return (
    <div className="App">
      <nav className="navbar bg-primary">
        <h1>
          <i className="fa-solid fa-location-dot"></i> Partners
        </h1>
        <div className="switch-container">
          <label className="switch">
            <input type="checkbox" onClick={changeTheme} />
            <div></div>
          </label>
        </div>
      </nav>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Landing />} />
            </Route>
            <Route path="/geo" element={<Geo />} />
            <Route path="/coordinates" element={<Coordinates />} />
            <Route path="/addpartner" element={<AddPartner />} />
            <Route
              path="/rangefilterpartner"
              element={<RangeFilterPartner />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
