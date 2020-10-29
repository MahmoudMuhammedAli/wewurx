import React from 'react';
import Styles from './addcontact.module.scss';

const AddContact = props => {
    return (
        <form className = {Styles.addcontact}>
            Add Contact
            <button>Create Contact</button>
        </form>
    )
}
export default AddContact;