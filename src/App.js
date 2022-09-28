import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Colors from './Components/Colors/Colors';
import Color from './Components/Color/Color';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/color/:id/:key/:pass" component={ Color } />
        <Route exact path="/colors" component={ Colors } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </main>
  );
}

export default App;
