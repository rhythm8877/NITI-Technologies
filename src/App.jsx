import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
