import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider as MaterialThemeProvider,StylesProvider } from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import {theme} from "./config";
import pages from './components/pages'

const App = () => {
  return (
    <StylesProvider injectFirst>
    <div className="App">
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
        <Router>
          {pages.map((item) => (
            <Route
              key={item.path}
              exact
              path={item.path}
              component={() => item.component}
            />
          ))}
        </Router>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </div>
    </StylesProvider>
  );
}

export default App;
