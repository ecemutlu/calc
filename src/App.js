import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Calculator from "./Calculator";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NotFound from "./NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="" element={<HomePage />}></Route>
          <Route path="calc/:mode" element={<Calculator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
