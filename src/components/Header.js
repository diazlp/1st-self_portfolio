import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Header = () => {
  const ref = useRef();
  const { pathname } = useLocation();
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const onBodyClick = (e) => {
      if (
        (ref.current && ref.current.contains(e.target)) ||
        showHeader === false
      ) {
        //event bubbling fix
        return;
      }

      setShowHeader(!showHeader);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  });

  return (
    <div className="header">
      {!showHeader ? (
        <RiMenu3Fill
          onClick={() => {
            setShowHeader(!showHeader);
          }}
          className="menu-icon hamburger"
        />
      ) : (
        <RiCloseFill
          onClick={() => {
            setShowHeader(!showHeader);
          }}
          className="menu-icon hamburger"
        />
      )}

      <ul
        ref={ref}
        className={`${showHeader ? "show-header" : "hide-header"} n-box1`}
      >
        <li className={`${pathname === "/" ? "active" : ""}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`${pathname === "/portofolio" && "active"}`}>
          <Link to="/portofolio">Portofolio</Link>
        </li>
        {/* <li className={`${pathname === "/courses" && "active"}`}>
          <Link to="/courses">Courses</Link>
        </li> */}
        <li className={`${pathname === "/contact" && "active"}`}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
