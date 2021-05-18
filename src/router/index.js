import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <div>Home Page</div>
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
    </BrowserRouter>
  );
};

export default Routes;
