import React, { lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./pages/404";
import Footer from "./components/Footer";
import Map from "./pages/Map";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Projects from "./pages/Projects/Projects";
import ProjectDetail from "./pages/Projects/ProjectDetail";
const Home = lazy(() => import("@/pages/Home"));

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <>loading...</>;

  return (
    <div className="font-Noto-Sans">
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/map" element={<Map />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
