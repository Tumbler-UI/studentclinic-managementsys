import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Explore from "./components/Explore";
import SiteDetails from "./pages/SiteDetails";

import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/explore"
          element={<Explore />}
        />

        <Route
          path="/sites/:slug"
          element={<SiteDetails />}
        />

      </Routes>
    </>
  );
}

export default App;