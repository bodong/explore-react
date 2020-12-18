import React, { useEffect, useState } from "react";
import "./BasicApp.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import GithubInfo from "./GithubInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Events, Contact } from "./Pages";

const fruits = ["Apple", "Orange", "Grape", "Guava"];

//destructuring
const [, special] = fruits;
console.log(special);
const dataObj = fruits.map((item, i) => ({ id: i, elemt: item }));
function BasicApp() {
  //hook - useState
  const [currentState, setCurrentState] = useState("starting..");
  console.log("use state ", currentState);

  useEffect(() => {
    console.log(`current state is ${currentState}`);
  }, [currentState]);

  return (
    <div className="App">
      <Header
        title="Basic App - SPA "
        state={currentState}
        setState={setCurrentState}
      />
      <Routes>
        <Route path="/" element={<Content data={dataObj} />} />
        <Route path="/me" element={<GithubInfo user="bodong" />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default BasicApp;
