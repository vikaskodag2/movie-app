import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";

import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import Trending from "./components/Pages/Trending";
import Series from "./components/Pages/Series";
import Search from "./components/Pages/Search";
import Movies from "./components/Pages/Movies";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
