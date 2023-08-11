import React from "react";
import "./scss/app.scss";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="App">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Home />
        <Footer />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
