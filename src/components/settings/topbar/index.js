import React from "react";
import Styles from "./topbar.module.scss";
import { NavLink } from "react-router-dom";

const TopBar = (props) => {
  return (
    <nav className={Styles.topbar}>
      <NavLink
        activeClassName={`${Styles.topbar__activelink} `}
        className={`${Styles.topbar__link}`}
        to='/system/settings/company'
      >
        Company
      </NavLink>
      <NavLink
        activeClassName={`${Styles.topbar__activelink} `}
        className={`${Styles.topbar__link}`}
        to='/system/settings/staffmembers'
      >
        Staff Members
      </NavLink>
      <NavLink
        activeClassName={`${Styles.topbar__activelink} `}
        className={`${Styles.topbar__link}`}
        to='/system/settings/jobtemplates'
      >
        Work
      </NavLink>
      <NavLink
        activeClassName={`${Styles.topbar__activelink} `}
        className={`${Styles.topbar__link}`}
        to='/system/settings/connectcalender'
      >
        Connect calender
      </NavLink>
      <NavLink
        activeClassName={`${Styles.topbar__activelink} `}
        className={`${Styles.topbar__link}`}
        to='/system/settings/integrations'
      >
        Integrations
      </NavLink>
    </nav>
  );
};

export default TopBar;
