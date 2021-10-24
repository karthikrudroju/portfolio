import React from "react";
import Profile from "./components/Profile/Profile"
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";


function App() {
    return (
        <div>
            <Profile />
            <AboutMe />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;