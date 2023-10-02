import React from "react";
import HeaderStyles from "./Header.module.css";
export const Header: React.FC = () => {
  return (
    <div>
      <h1 className={HeaderStyles.h1}>
        Fit Infinity{" "}
        <span role="img" aria-label="bicep muscle">
          💪🏻
        </span>
      </h1>
      <div className={HeaderStyles.desc}>
        Welcome to Fit Infinity. A Fitness Tracking App. Some datas can't be
        deleted, as it is a public API without User Profiles and Auth. Every new
        data added can be deleted.
      </div>
    </div>
  );
};
