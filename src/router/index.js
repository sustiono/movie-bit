import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import { Home, SearchResult } from "../pages";
import { Header, Footer, NotFound } from "../components";
import { history } from "../utils";

const Routes = () => {
  return (
    <Router history={history}>
      <div className='flex flex-col items-center min-h-screen h-full max-w-screen-xl m-auto'>
        <Header />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/search/:keyword'>
            <SearchResult />
          </Route>

          <Route exact path='/movie/:title'>
            <div className='flex h-full'>Detail Movie</div>
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default Routes;
