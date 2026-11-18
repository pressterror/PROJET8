import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Accommodation from "./pages/Accommodation/Accommodation.jsx";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/logement/:slug"
          element={
            <>
              <Accommodation />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Error />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
