import React from "react";
import Styles from "./sidebar.module.scss";
import { NavLink } from "react-router-dom";

const SideBar = ({ staffMemberID, location }) => {
  return (
    <aside className={Styles.sidebar}>
      <h5 className={Styles.sidebar__heading}>Staff members</h5>
      <ul className={Styles.sidebar__links}>
        <li className={Styles.sidebar__links__link}>
          <NavLink
            to={`/system/settings/staffmembers/managementuser/${staffMemberID}/basicinfo`}
            activeClassName={Styles.sidebar__active}
          >
            Details
          </NavLink>
          <NavLink
            to={`/system/settings/staffmembers/managementuser/${staffMemberID}/notes`}
            activeClassName={Styles.sidebar__active}
          >
            Files and notes
          </NavLink>
          <NavLink
            to={`/system/settings/staffmembers/managementuser/${staffMemberID}/workinghours`}
            activeClassName={Styles.sidebar__active}
          >
            Working hours
          </NavLink>
        </li>
      </ul>
      {location.pathname ===
      `/system/settings/staffmembers/managementuser/${staffMemberID}/basicinfo` ? (
        <>
          {" "}
          <button className={Styles.sidebar__button}> Save</button>
          <button className={Styles.sidebar__button}> Update</button>
        </>
      ) : (
        ""
      )}
      {location.pathname ===
      `/system/settings/staffmembers/managementuser/${staffMemberID}/notes` ? (
        <button className={Styles.sidebar__button}>
          {" "}
          <i className='fa fa-plus '></i>Add Files
        </button>
      ) : (
        ""
      )}
    </aside>
  );
};
export default SideBar;
