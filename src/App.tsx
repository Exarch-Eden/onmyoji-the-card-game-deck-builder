import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";

import "./css/App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <header>
                  <NavBar />
                </header>
                <main>
                    <Routes />
                    {/* <p className="LightText">This is app.</p> */}
                </main>
                <footer className="Padded">
                    Web app created by @Exarch-Eden
                </footer>
            </Router>
        </div>
    );
}

export default App;
