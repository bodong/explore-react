import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, About, Events, Contact, Page404, Services, CompanyHistory, Location } from "./pages"

// http://127.0.0.1:8080/api/v1/leader-boards

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="services" element={<Services />} />
          <Route path="history" element={<CompanyHistory />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
