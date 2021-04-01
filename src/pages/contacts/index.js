import React, { useState } from "react";
import AddContact from "../../components/contacts/addcontact";
import MainContact from "../../components/contacts/maincontact";
import ViewContact from "../../components/contacts/viewcontact";
import { Link, Switch } from "react-router-dom";
import Styles from "./contacts.module.scss";
import EditContact from "../../components/contacts/editcontact";

const Contacts = (props) => {
  let [shouldShowAddContact, setShouldShowAddContact] = useState(false);
  let [shouldShowViewConact, setShouldShowViewContact] = useState(false);
  let [shouldShowEditContact, setShouldShowEditContact] = useState(false);

  const renderComponents = () => {
    if (shouldShowAddContact) {
      return <AddContact setShouldShowAddContact={setShouldShowAddContact} />;
    }
    if (shouldShowEditContact) {
      return <EditContact />;
    }
    if (shouldShowViewConact) {
      return (
        <ViewContact setShouldShowEditContact={setShouldShowEditContact} />
      );
    }

    return (
      <MainContact
        setShouldShowViewContact={setShouldShowViewContact}
        setShouldShowAddContact={setShouldShowAddContact}
      />
    );
  };
  const hanldeLinkClick = (e) => {
    setShouldShowAddContact(false);
    setShouldShowViewContact(false);
    setShouldShowEditContact(false);
  };
  return (
    <div className={`${Styles.contacts} `}>
      <div className={`${Styles.bar}`}>
        <Link
          to='system/contacts'
          onClick={hanldeLinkClick}
          className={`${Styles.bar__link}`}
        >
          Contacts
        </Link>
      </div>
      {renderComponents()}
    </div>
  );
};
export default Contacts;
