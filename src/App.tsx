import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from './pages/Navigation';
import Search from './pages/Search';
import Landing from './pages/Landing';
import About from './pages/About';
import Blog from './pages/Blog';
import Stores from './pages/Stores';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/search" element={<Search />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/stores" element={<Stores />} />
    </Routes>
  );
};

export default App;
