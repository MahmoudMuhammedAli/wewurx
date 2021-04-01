import React from "react";
import Styles from "./sidebar.module.scss";

import { NavLink as Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <aside className={Styles.sidebar}>
      <Link to='/system/jobs/invoices' className={`${Styles.sidebar__link}`}>
        {" "}
        <i className='fa fa-arrow-circle-o-left fa-lg'></i>
        <span>Invoices</span>
      </Link>
      <Link
        to='/system/jobs/invoices/add'
        className={`${Styles.sidebar__button}`}
        activeClassName={Styles.sidebar__buttonActive}
        exact
      >
        Invoices
      </Link>
      <Link
        to='/system/jobs/invoices/add/costitems'
        className={`${Styles.sidebar__button}`}
        activeClassName={Styles.sidebar__buttonActive}
      >
        Cost items &amp; Payments
      </Link>
      <Link
        to='/system/jobs/invoices/add/filesandnotes'
        className={`${Styles.sidebar__button}`}
        activeClassName={Styles.sidebar__buttonActive}
      >
        Files &amp; Notes
      </Link>
      <button
        className={`${Styles.sidebar__buttonBottom} ${Styles.sidebar__button}`}
      >
        Save
      </button>
      <button
        className={`${Styles.sidebar__buttonBottom} ${Styles.sidebar__button}`}
      >
        Cancel
      </button>
    </aside>
  );
};
export default SideBar;
