import React from "react";
import AccordionContainer from "./AccordionContainer";

const Home = () => {
    return (
        <div className="home">
            <div className="navbar">
                <nav className="nav">Welcome to Home</nav>
            </div>
            <div className="celebs">
                <AccordionContainer />
            </div>
        </div>
    )
}

export default Home;