import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Nav from "./Nav.jsx";

const RouteComponent = () => {
    return(
        <>
            <Nav />
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/aboutme" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </>
    )
}

export default RouteComponent;