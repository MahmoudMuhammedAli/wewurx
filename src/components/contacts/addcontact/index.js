import React from 'react';
import Styles from './addcontact.module.scss';
import Form from './components/addcontactform';
import SideBar from './components/addcontactsidebar';

const AddContact = props => {
    return (
        <form className = {Styles.addContact}>
            <SideBar setShouldShowAddContact = {props.setShouldShowAddContact} />
            <Form />
        </form>
    )
}
export default AddContact;