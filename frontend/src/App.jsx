import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
