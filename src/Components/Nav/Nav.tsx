import React from "react";
import NavStyles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
export const Nav: React.FC = () => {
  return (
    <div className={NavStyles.nav}>
      <NavLink to="/" className={NavStyles.navPills}>
        <span role="img" aria-label="fox emoji">
          🦊
        </span>{" "}
        Dashboard
      </NavLink>
      <NavLink to="/exercises" className={NavStyles.navPills}>
        <span role="img" aria-label="exercise emoji">
          ⛹🏻
        </span>{" "}
        Exercises
      </NavLink>
      <NavLink to="/goals" className={NavStyles.navPills}>
        <span role="img" aria-label="goal emoji">
          🎁
        </span>{" "}
        Goals
      </NavLink>
      <NavLink to="/foods" className={NavStyles.navPills}>
        <span role="img" aria-label="food emoji">
          🍕
        </span>{" "}
        Foods
      </NavLink>
    </div>
  );
};
