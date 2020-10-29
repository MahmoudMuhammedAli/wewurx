import React, { useState } from 'react';
import EditContact from '../editcontact';
import Styles from './viewcontact.module.scss';

const ViewContact = props => {
    return (
        <div>
            Show Contact 
            <button onClick = {()=>props.setShouldShowEditContact(true)}>edit Contact</button>
        </div>
    )
}
export default ViewContact;