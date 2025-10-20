import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopBottom";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";
import Home from "./pages/Home";
import OurWork from "./pages/OurWork";
import AboutUs from "./pages/AboutUs";
import News from "./pages/News";
import Contact from "./pages/Contact";
import GetInvolved from "./pages/GetInvolved";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <ScrollToTopOnRouteChange />
        <Header />

        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-involved" element={<GetInvolved />} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}
export default App;
