import React from "react";
import CheckBoxWithLabel from "../../checkbox-with-label";
import Styles from "./sites-directory.module.scss";

const SitesDirectory = ({ sites }) => {
  const renderSites = () => {
    return sites.map(({ id, site, person }) => (
      <div className={Styles.directory__item}>
        <h5 className={Styles.directory__item__heading}>{person}</h5>
        <CheckBoxWithLabel label={site} id={id} name={id} />
      </div>
    ));
  };
  return <div className={Styles.directory}>{renderSites()}</div>;
};

export default SitesDirectory;
