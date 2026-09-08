import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import TripPlanner from "./pages/TripPlanner";
import Explore from "./components/Explore";
import SiteDetails from "./pages/SiteDetails";
import MapPage from "./pages/MapPage";
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

        <Route
          path="/map"
          element={<MapPage />}
        />

        <Route
          path="/categories"
          element={<Categories />}
        />

        <Route
          path="/plan"
          element={<TripPlanner />}
        />

        <Route
          path="/about"
          element={<About />}
        />
                  
        <Route
          
          element={<Footer />}
        />



      </Routes>
    </>
  );
}

export default App;