import React, { lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./pages/404";

const Home = lazy(() => import("@/pages/Home"));

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <>loading...</>;

  return (
    <div>
      <Navbar />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
