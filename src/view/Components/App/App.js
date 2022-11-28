import { Routes, Route } from "react-router-dom";
import { useDarkMode } from "../../../hooks/useDarkMode";

import HomePage from "../HomePage/HomePage";
import About from "../About/About";
import MyFavorites from "../MyFavorites/MyFavorites";
import Navbar from "../Navbar/Navbar";

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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorite" element={<MyFavorites />} />
          </Routes>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
