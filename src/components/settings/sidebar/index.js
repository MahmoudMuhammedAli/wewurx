import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./sidebar.module.scss";

const SideBar = (props) => {
  return (
    <aside className={Styles.sidebar}>
      <h2 className={Styles.sidebar__heading}>Settings</h2>
      <NavLink
        to='/system/settings/company/companyinfo'
        className={Styles.sidebar__link}
        activeClassName='settings__active'
      >
        Company Information
      </NavLink>
      <NavLink
        activeClassName='settings__active'
        to='/system/settings/company/billing'
        className={Styles.sidebar__link}
      >
        Billing
      </NavLink>
      <NavLink
        activeClassName='settings__active'
        to='/system/settings/company/quotesandinvoices'
        className={Styles.sidebar__link}
      >
        Quotes And Invoices
      </NavLink>
      <NavLink
        activeClassName='settings__active'
        to='/system/settings/company/subscription'
        className={` ${Styles.sidebar__linkLast} ${Styles.sidebar__link}`}
      >
        Subscription
      </NavLink>
    </aside>
  );
};

export default SideBar;
