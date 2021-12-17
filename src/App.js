import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Portofolio from "./pages/Portofolio";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Footer from "./components/Footer";
import "./stylesheets/home.css";
import "./stylesheets/carousel.css";
import "./stylesheets/portofolio-courses.css";
import "./stylesheets/header-footer.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 800,
});

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
