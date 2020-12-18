import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
export function About() {
  return (
    <div>
      <p>About this application...</p>
      <Outlet />
      <Link to="/about/events">Events</Link> <span />
      <Link to="/about/contact">Contact</Link> <span />
    </div>
  );
}

export function Events() {
  return (
    <div>
      <p>Events will be here</p>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <p>Contact us here</p>
    </div>
  );
}
