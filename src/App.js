import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CurrencyConverter from './CurrencyConverter';
import CurrencyListing from './CurrencyListing';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Currency Converter</Link>
        <Link className="navbar-brand" to="/listing">Currency Listing</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={CurrencyConverter} />
        <Route path="/listing" component={CurrencyListing} />
      </Switch>
    </Router>
  );
}

export default App;
