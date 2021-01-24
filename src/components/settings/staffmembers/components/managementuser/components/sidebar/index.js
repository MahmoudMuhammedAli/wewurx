import React from "react";
import Styles from "./sidebar.module.scss";

const SideBar = (props) => {
  return (
    <aside className={Styles.sidebar}>
      <h5 className={Styles.sidebar__heading}>Staff members</h5>
      <ul className={Styles.sidebar__links}>
        <li className={Styles.sidebar__links__link}>
          <a href='#'>Details</a>
        </li>
      </ul>
    </aside>
  );
};
export default SideBar;
