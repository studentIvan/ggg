import * as React from "react"
import { Router, Link, Location } from "@reach/router"
import "./main.css"

import { WordToSearch } from "../components/word-to-search"
import { HomePage } from "../components/home"
import { ResultPage } from "../components/result"

const App = () => (
  <div className="app">
    <nav className="nav">
      <Link to="/">Home Page</Link>
      <Link to="/result">Result Page</Link>
      <Link to="/test">Test Word Page</Link>
      {` `}
    </nav>
    <Location>
    {({ location }) => (
      <Router location={location} className="router">
        <HomePage path="/" />
        <ResultPage path="/result" />
        <WordToSearch word={location.pathname.substring(1)} default />
      </Router>
    )}
    </Location>
  </div>
);

export default App;
