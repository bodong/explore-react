import React from "react"
import { Link, Outlet, useLocation } from "react-router-dom"

export function Home() {
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Event</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    );
};

export function About() {
    return (
        <div>
            <h1>[About]</h1>
            <nav>
                <Link to="services">Services</Link>
                <Link to="history">Company History</Link>
                <Link to="location">Location</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export function Events() {
    return (
        <div>
            <h1>[Events Detail]</h1>
        </div>
    );
};

export function Contact() {
    return (
        <div>
            <h1>[Contact Information]</h1>
        </div>
    );
};

export function Page404() {
    let location = useLocation();
    console.log(location);
    return(
        <div>
            <h1>Resource not found {location.pathname}</h1>
        </div>
    );
};

export function Services() {
    return (
        <div>
            <h2>Our Services</h2>
        </div>
    );
};

export function CompanyHistory() {
    return (
        <div>
            <h2>Company History</h2>
        </div>
    );
};

export function Location() {
    return (
        <div>
            <h2>Our Location</h2>
        </div>
    );
};