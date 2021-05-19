import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import { Header, Footer, NotFound } from "../components";

const Routes = () => {
  return (
    <BrowserRouter>
      <div className='flex flex-col items-center min-h-screen h-full max-w-screen-xl m-auto'>
        <Header />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/search/:keyword'>
            <div>Search Result</div>
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
    </BrowserRouter>
  );
};

export default Routes;
