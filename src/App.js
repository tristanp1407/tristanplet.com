import { React, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { lightTheme, darkTheme } from "./themes";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <NavBar theme={theme} themeToggler={() => themeToggler()} />

      <BrowserRouter>
        <Route theme={theme} component={HomePage} path="/" exact />
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
