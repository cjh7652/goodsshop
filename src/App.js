import './App.scss';
import MainPage from './components/MainPage';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route}  from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Interior from "./pages/Interior.jsx";
import Kitchen from "./pages/Kitchen.jsx";
import Office from "./pages/Office.jsx";
import Fabric from "./pages/Fabric.jsx";
import UploadPage from './components/UploadPage';
import ProductPage from './components/ProductPage';



function App() {
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(false);
  function handleScroll() {
    if (ScrollY > 100) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }
  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });
  return (
    <div className="App">
        <Header className={ScrollActive ? "header " : "fixedBox "} /> 
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/interior" element={<Interior />} />
            <Route path="/kitchen" element={<Kitchen />} />
            <Route path="/office" element={<Office />} />
            <Route path="/fabric" element={<Fabric />} />
            <Route path="/UploadPage" element={<UploadPage />} />
            <Route path="/ProductPage/:id" element={<ProductPage />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
/* https://ccdc80f2-a882-4d8b-9b21-b6348e7d3483.mock.pstmn.io */