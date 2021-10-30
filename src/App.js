import React from "react";
import Profile from "./components/Profile/Profile"
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";


function App() {
    return (
        <div>
            <NavBar />
            <Profile />
            <AboutMe />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;