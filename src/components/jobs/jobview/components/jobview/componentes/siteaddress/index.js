import React, { useEffect, useState } from "react";
import Styles from "./siteaddress.module.scss";

const SiteAddress = (props) => {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setAddress({
        address: "1 Wimpole Street, W1G 0AE",
        street: "1 Wimpole Street",
        address2: "Another Address",
        city: "London",
        country: "England",
        postCode: "W1G 0AE",
      });
    }, 1000);
  }, []);

  const renderAddress = () => {
    if (address) {
      return (
        <div>
          <div className={Styles.siteaddress__item}>{address.address}</div>
          <div className={Styles.siteaddress__item}>{address.street}</div>
          <div className={Styles.siteaddress__item}>{address.address2}</div>
          <div className={Styles.siteaddress__item}>{address.city}</div>
          <div className={Styles.siteaddress__item}>{address.country}</div>
          <div className={Styles.siteaddress__item}>{address.postCode}</div>
        </div>
      );
    }
    return <div></div>;
  };
  return (
    <div className={Styles.siteaddress}>
      <h3 className={Styles.siteaddress__heading}>Site address</h3>
      {renderAddress()}
    </div>
  );
};

export default SiteAddress;
