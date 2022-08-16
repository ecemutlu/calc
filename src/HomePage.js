import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="calc/addition">Addition</Link>
      <br />
      <Link to="calc/substraction">Substraction</Link>
    </div>
  );
};

export default HomePage;
