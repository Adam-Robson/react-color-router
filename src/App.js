import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Colors from './Components/Colors/Colors';
import Color from './Components/Color/Color';
import Home from './Components/Home/Home';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/colors/:id">
          <Color />
        </Route>
        <Route path="/colors">
          <Colors />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
}


export default App;
