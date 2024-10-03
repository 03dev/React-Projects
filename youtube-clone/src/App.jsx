import React, { useState } from "react";
import Nvabar from "./components/navbar/Navbar";
import { Route, Routes } from 'react-router-dom';
import Video from "./pages/video/Video";
import Home from "./pages/home/Home";

function App() {

  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Nvabar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  )
}
export default App