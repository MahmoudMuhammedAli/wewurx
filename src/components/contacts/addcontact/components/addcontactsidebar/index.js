import React from "react";
import Styles from "./addcontactsidebar.module.scss";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <div className={Styles.sidebar}>
      <Link
        to='/system/contacts'
        onClick={() => props.setShouldShowAddContact(false)}
        className={Styles.sidebar__heading}
      >
        <span>
          <i className='fa fa-arrow-left fa-lg'></i>
        </span>
        Contacts
      </Link>
      <ul className={`${Styles.sidebar__list} list-unstyled`}>
        <li
          className={`${Styles.sidebar__list__item} ${Styles.sidebar__list__itemActive}`}
        >
          <Link>Contact</Link>
        </li>
        <li className={`${Styles.sidebar__list__item}`}>
          <Link>Files and Notes</Link>
        </li>

        <li className={`${Styles.sidebar__list__item}`}>
          <Link>Sites</Link>
        </li>
        <li className={`${Styles.sidebar__list__item}`}>
          <Link>Billing</Link>
        </li>
      </ul>

      <button type='submit' className={`${Styles.sidebar__button}`}>
        Create Contact
      </button>
    </div>
  );
};
export default SideBar;
