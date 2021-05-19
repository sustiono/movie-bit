import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Footer } from "../components";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <div className='flex flex-col items-center justify-center min-h-screen h-full max-w-screen-xl m-auto'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/search/:keyword'>
            <div>Search Result</div>
          </Route>

          <Route exact path='/movie/:title'>
            <div>Detail Movie</div>
          </Route>

          <Route>
            <div className=''>
              <h1>404 - Not Found!</h1>
            </div>
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Routes;
