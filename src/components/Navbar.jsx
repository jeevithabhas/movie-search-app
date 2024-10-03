import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white shadow-2xl">
      <div className="container mx-auto flex justify-between">
        <h1 className=" text-3xl text-white font-bold  rounded">
          Movie Search
        </h1>
        <Link to="/" className="text-lg font-bold hover:text-sky-500">
          View Movie/Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
