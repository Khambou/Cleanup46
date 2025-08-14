import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="cursor-pointer">
        <p className="font-bold font-grotesque text-transparent bg-clip-text bg-gradient-to-r from-white-color to-logo-grey text-3xl md:text-5xl inline-block logo">
          Cleanup 46
        </p>
      </div>
    </Link>
  );
};

export default Logo;
