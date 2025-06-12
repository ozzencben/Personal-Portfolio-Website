import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import Contact from "./pages/Contact";
import ProjectList from "./pages/ProjectList";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
