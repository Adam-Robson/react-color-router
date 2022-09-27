import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Colors from './Components/Colors/Colors';
import Color from './Components/Color/Color';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/colors/:id">
          <Color />
        </Route>
        <Route path="/colors" component={Colors} />
        <Route exact path="/" component={ Home } />
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  );
}


export default App;
