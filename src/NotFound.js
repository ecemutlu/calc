import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Sayfa Bulunamadı!</h1>
      <Link to="/">Ana sayfaya dön</Link>
    </div>
  );
};
export default NotFound;
