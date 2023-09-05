import React from "react";
import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ShopSingle from "./pages/ShopSingle.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import CartWagen from "./pages/CartWagen.jsx";
import Menu from "./pages/Menu.jsx";
import HomeMenu from "./pages/Home.jsx";
import Payment from "./pages/Payment.jsx";

export const CategoryContext = React.createContext();
export const SearchContext = React.createContext();
export const CartContext = React.createContext();
export const TotalCountWagenContext = React.createContext();
export const TotalSummWagenContext = React.createContext();
export const ArrayWagenContext = React.createContext();
export const SingleWagenContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [categoryValue, setCategoryValue] = React.useState("Italian pasta");
  const [cartValue, setCartValue] = React.useState([]);
  const [totalCountWagen, setTotalCountWagen] = React.useState(0);
  const [totalSummWagen, setTotalSummWagen] = React.useState(0);
  const [arrayWagen, setArrayWagen] = React.useState([]);
  const [singleWagen, setSingleWagen] = React.useState(0);

  return (
    <div className="App">
      <TotalSummWagenContext.Provider
        value={{ totalSummWagen, setTotalSummWagen }}
      >
        <SingleWagenContext.Provider value={{ singleWagen, setSingleWagen }}>
          <ArrayWagenContext.Provider value={{ arrayWagen, setArrayWagen }}>
            <TotalCountWagenContext.Provider
              value={{ totalCountWagen, setTotalCountWagen }}
            >
              <CartContext.Provider value={{ cartValue, setCartValue }}>
                <SearchContext.Provider value={{ searchValue, setSearchValue }}>
                  <CategoryContext.Provider
                    value={{ categoryValue, setCategoryValue }}
                  >
                    <Header />
                    <Routes>
                      <Route path="/single" element={<ShopSingle />} />
                      <Route path="/cartWagen" element={<CartWagen />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/notfound" element={<NotFound />} />
                      <Route path="/menu" element={<Menu />} />
                      <Route path="/HomeMenu/:menu" element={<HomeMenu />} />
                      <Route path="/payment" element={<Payment />} />
                      <Route path="/" element={<Home />} />
                      <Route path="/*" element={<Home />} />
                    </Routes>
                    <Footer />
                  </CategoryContext.Provider>
                </SearchContext.Provider>
              </CartContext.Provider>
            </TotalCountWagenContext.Provider>
          </ArrayWagenContext.Provider>
        </SingleWagenContext.Provider>
      </TotalSummWagenContext.Provider>
    </div>
  );
}

export default App;
