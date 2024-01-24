import { Routes, Route } from "react-router-dom";
import "./App.css";
import Live from "./pages/Live";
import Home from "./pages/Home";
import { Store } from "./pages/Store";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/band-app" exact element={<Nav />}>
          <Route path="/band-app" exact element={<Home />} />
          <Route path="/band-app/live" exact element={<Live />} />
          <Route path="/band-app/store" exact element={<Store />} />
          <Route path="/band-app/about" exact element={<About />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
