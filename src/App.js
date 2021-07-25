import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Payments } from "./components/Pages/Payments";
import { Contact } from "./components/Pages/Contact";
import { Partners } from "./components/Pages/Partners";
import { Location } from "./components/Pages/Locations";
import { Brands } from "./components/Pages/Brands";
function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/payments" component={Payments} />
            <Route path="/contact" component={Contact} />
            <Route path="/partners" component={Partners} />
            <Route path="/location" component={Location} />
            <Route path="/brands" component={Brands} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
