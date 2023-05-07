import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import NotFound from "./pages/NotFound";
import { Navbar } from "./components/Navbar/Navbar";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const SingleProject = lazy(() => import("./pages/SingleProject"));

function App() {
  return (
    <div className="scroll-smooth bg-[#111111]">
      <Router>
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
