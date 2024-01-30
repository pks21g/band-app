import { Routes, Route } from "react-router-dom";
import "./App.css";
import Live from "./pages/Live";
import Home from "./pages/Home";
import { Store } from "./pages/Store";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import StoreNav from "./components/StoreNav";
import { Cart } from "./components/store/Cart";
import { Login } from "./components/store/Login";
import { Music } from "./components/store/Music";
import { Apparel } from "./components/store/Apparel";
import { Accessories } from "./components/store/Accessories";

function App() {
  return (
    <>
      <Routes>
        <Route path="/band-app" exact element={<Nav />}>
          <Route path="/band-app" exact element={<Home />} />
          <Route path="/band-app/live" exact element={<Live />} />
          <Route path="/band-app/about" exact element={<About />} />
          <Route path="/band-app/store" exact element={<Store />} />
          <Route
            path="/band-app/shopping-cart"
            exact
            element={<Cart />}
          />
          <Route
            path="/band-app/login"
            exact
            element={<Login />}
          />
           <Route
            path="/band-app/music"
            exact
            element={<Music />}
          />
          <Route
            path="/band-app/apparel"
            exact
            element={<Apparel />}
          />
          <Route
            path="/band-app/accessories"
            exact
            element={<Accessories />}
          />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
