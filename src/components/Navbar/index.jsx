import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
    </div>
  );
}

export default Navbar