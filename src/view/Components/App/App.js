import { Routes, Route } from "react-router-dom";
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
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/favorite" element={<MyFavorites />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </ErrorBoundary>
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
