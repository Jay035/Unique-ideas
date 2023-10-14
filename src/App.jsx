import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import { Navbar } from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const SingleProject = lazy(() => import("./pages/SingleProject"));

function App() {
  return (
    <div id="top" className="app scroll-smooth overflow-x-hidden">
      <Router>
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:name" element={<SingleProject />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
