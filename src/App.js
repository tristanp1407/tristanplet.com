import { React, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { lightTheme, darkTheme } from "./themes";

function App() {
  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <BrowserRouter>
        <Route theme={theme} component={HomePage} path="/" exact />
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
