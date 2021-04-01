import React from "react";
import Styles from "./sidebar.module.scss";

import { NavLink as Link, useLocation } from "react-router-dom";

const SideBar = (props) => {
  const { id } = props;
  const location = useLocation();
  const currentPage = location.pathname.includes("costitems")
    ? "costitems"
    : location.pathname.includes("filesandnotes")
    ? "filesandnotes"
    : "maininfo";
  console.log(currentPage, "from current page");
  return (
    <aside className={Styles.sidebar}>
      <Link to='/system/jobs/invoices' className={`${Styles.sidebar__link}`}>
        {" "}
        <i className='fa fa-arrow-circle-o-left fa-lg'></i>
        <span>Invoices</span>
      </Link>
      <Link
        to={`/system/jobs/invoices/view/${id}/`}
        className={`${Styles.sidebar__button}`}
        activeClassName={Styles.sidebar__buttonActive}
        exact
      >
        Invoices
      </Link>
      <Link
        to={`/system/jobs/invoices/view/${id}/costitems`}
        className={`${Styles.sidebar__button}`}
        activeClassName={Styles.sidebar__buttonActive}
      >
        Cost items &amp; Payments
      </Link>
      <Link
        to={`/system/jobs/invoices/view/${id}/filesandnotes`}
        className={`${Styles.sidebar__button}`}
        activeClassName={Styles.sidebar__buttonActive}
      >
        Files &amp; Notes
      </Link>
      {currentPage === "maininfo" ? (
        <>
          <button
            className={`${Styles.sidebar__buttonBottom} ${Styles.sidebar__button}`}
          >
            Preview invoice
          </button>
          <button
            className={`${Styles.sidebar__buttonBottom} ${Styles.sidebar__button}`}
          >
            Send Invoice
          </button>
          <button
            className={`${Styles.sidebar__buttonBottom} ${Styles.sidebar__button}`}
          >
            Edit Invoice
          </button>
          <button
            className={`${Styles.sidebar__buttonBottom} ${Styles.sidebar__button} ${Styles.sidebar__buttonDanger}`}
          >
            Delet e Invoice
          </button>
        </>
      ) : currentPage === "costitems" ? (
        <>
          {" "}
          <button
            className={`${Styles.sidebar__buttonBottom} ${Styles.sidebar__button}`}
          >
            Preview invoice
          </button>
          <button
            className={`${Styles.sidebar__buttonBottom} ${Styles.sidebar__button}`}
          >
            Send Invoice
          </button>
        </>
      ) : (
        <>
          {" "}
          <button
            className={`${Styles.sidebar__buttonBottom} ${Styles.sidebar__buttonBottomAdd} ${Styles.sidebar__button}`}
          >
            <i className='fa fa-plus '></i> Add files
          </button>
          <button
            className={`${Styles.sidebar__buttonBottom} ${Styles.sidebar__button}`}
          >
            Preview invoice
          </button>
          <button
            className={`${Styles.sidebar__buttonBottom} ${Styles.sidebar__button}`}
          >
            Send Invoice
          </button>
        </>
      )}
    </aside>
  );
};
export default SideBar;
