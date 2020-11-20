import React from 'react';

const ViewContact = props => {
    return (
        <div>
            Show Contact 
            <button onClick = {()=>props.setShouldShowEditContact(true)}>edit Contact</button>
        </div>
    )
}
export default ViewContact;