import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import Home from './pages/home'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path = {["/"]}>
            <ThemeProvider theme={theme}>
              <Home />
            </ThemeProvider>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
