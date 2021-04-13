import React from "react";
import Styles from "./bar.module.scss";

const Bar = ({ setPage }) => {
  const handleNavLink = (e, page) => {
    const lis = e.currentTarget.parentElement.children;

    for (const li of lis) {
      li.classList.remove(Styles.bar__navs__navitemActive);
    }
    e.currentTarget.classList.add(Styles.bar__navs__navitemActive);

    setPage({ [page]: true });
  };

  return (
    <aside className={Styles.bar}>
      <ul className={Styles.bar__navs}>
        <li
          className={`${Styles.bar__navs__navitem} ${Styles.bar__navs__navitemActive}`}
          onClick={(e) => handleNavLink(e, "status")}
        >
          <button className={Styles.bar__navs__navitem__button}>Status</button>
        </li>
        <li
          className={Styles.bar__navs__navitem}
          onClick={(e) => handleNavLink(e, "customer")}
        >
          <button className={Styles.bar__navs__navitem__button}>
            Customer
          </button>
        </li>
        <li
          className={Styles.bar__navs__navitem}
          onClick={(e) => handleNavLink(e, "site")}
        >
          <button className={Styles.bar__navs__navitem__button}>Site</button>
        </li>
        <li
          className={Styles.bar__navs__navitem}
          onClick={(e) => handleNavLink(e, "date")}
        >
          <button className={Styles.bar__navs__navitem__button}>Date</button>
        </li>
        <li
          className={Styles.bar__navs__navitem}
          onClick={(e) => handleNavLink(e, "dueDate")}
        >
          <button className={Styles.bar__navs__navitem__button}>
            Due Date
          </button>
        </li>
        {/* <li
          className={Styles.bar__navs__navitem}
          onClick={(e) => handleNavLink(e, "asset")}
        >
          <button className={Styles.bar__navs__navitem__button}>Asset</button>
        </li>
        <li
          className={Styles.bar__navs__navitem}
          onClick={(e) => handleNavLink(e, "customeField")}
        >
          <button className={Styles.bar__navs__navitem__button}>
            Custom field
          </button>
        </li> */}
      </ul>
    </aside>
  );
};

export default Bar;
