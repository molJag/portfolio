import React from "react";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Contribution from "./components/Contribution/Contribution";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Viewport from "./components/Viewport/Viewport";
import Work from "./components/Work/Work";

function App() {
  return (
    <div className="app" id="home">
      <Viewport {...{classes: ['min-full-height']}}>
        <Header />
        <Home />
      </Viewport>
      <Viewport>
        <About />
      </Viewport>
      <Viewport>
        <Skills />
      </Viewport>
      <Viewport>
        <Work />
      </Viewport>
      <Viewport>
        <Contribution />
      </Viewport>
      <Viewport>
        <Contact />
        <Footer />
      </Viewport>
    </div>
  );
};

export default App;
