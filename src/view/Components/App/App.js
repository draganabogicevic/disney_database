import { useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useDarkMode } from "../../../hooks/useDarkMode";

import ErrorBoundary from "../ErrorBoundary";
import HomePage from "../HomePage";
import About from "../About";
import MyFavorites from "../MyFavorites";
import Navbar from "../Navbar";
import Footer from "../Footer";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globalStyles";
import { lightTheme, darkTheme } from "../Theme";

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const history = useHistory();

  useEffect(() => {
    history.push("/");
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <Navbar
            themeMode={themeMode}
            theme={theme}
            toggleTheme={themeToggler}
          />
          <ErrorBoundary>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/favorite">
                <MyFavorites />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </ErrorBoundary>
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
