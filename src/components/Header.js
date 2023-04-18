import React from "react";
import { Link } from "react-router-dom";

export default function Nav (){
  return (
    <div className="nav">
      <Link to="/">
        <div>HOME</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/stocks">
        <div>Stock</div>
      </Link>
    </div>
  );
};