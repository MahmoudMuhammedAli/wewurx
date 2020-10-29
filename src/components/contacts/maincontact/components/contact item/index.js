import React from 'react';
import Styles from './contactitem.module.scss';
import faker from 'faker';


const ContactItem = props => {
    return (
        <>
            <hr />
            <div className = {`${Styles.contactitem}`}>
                <input type = 'checkbox' className = {`${Styles.contactitem__check}`}/>
                <div className = {Styles.contactitem__info}>
                <img 
                    src = {faker.image.avatar()} 
                    alt = 'avatar' 
                    title = 'personal photo'
                    className = {`${Styles.contactitem__info__image}`}
                />
                <div className = {Styles.contactitem__info__info}>
                    <h3>John Doe</h3>
                    <p>Residential Customer</p>
                </div>
                </div>
                <div className = {`${Styles.contactitem__address}`}>
                    <p>
                        11
                        Standish
                        Manchester
                        JD1 5))
                    </p>
                </div>
                <div className = {`${Styles.contactitem__phone}`}>
                    01102076772
                </div>
                <div className = {`${Styles.contactitem__email}`}>
                    mohamed@kreativekommit.com
                </div>
                <div className = {`${Styles.contactitem__balance}`}>
                    20.00$
                </div>
                <button 
                    onClick = {()=>props.setShouldShowViewContact(true)} 
                    className = {`${Styles.contactitem__button}`}
                >
                    View
                </button>
            </div>
            
        </>
    )
}
export default ContactItem;