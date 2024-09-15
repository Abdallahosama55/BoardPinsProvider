import React from "react";
import logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
function HeaderAuth() {
  return (
    <div className=" mx-12 mt-6">
      <Link to={"/"}>
        <img src={logo} className=" w-[200px]" />
      </Link>
    </div>
  );
}

export default HeaderAuth;
