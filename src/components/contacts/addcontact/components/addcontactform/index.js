import React from 'react';
import Styles from './addcontactform.module.scss';
import {Field,reduxForm} from 'redux-form';

const renderInput = ({ input, label ,className, type, meta:{touched,error}}) => {

    return(
        <div>
            <label>
                <span className = {`${Styles.form__label}`}>{label}</span>
                <div className = {`${Styles.form__input} ${className}`}>
                    <input {...input} type = {type} />
                    {touched &&  error && <span>{error}</span>}
                </div>
                
            </label>
        </div>
    );

}

const Form = props => {

    const contactTypes = ['Commercial Customer', 'Residential Customer', 'Contractor', 'Supplior']
const renderContactTypes = ({ input, meta: { touched, error } }) => (
    <div >
        <label>
            <span className = {`${Styles.form__label}`}>Contact Type</span>
            
            <select {...input} className = {`${Styles.form__select}`} >
            {contactTypes.map(val => (
            <option value={val} key={val}>
                {val}
            </option>
            ))}
        </select>
        </label>
      
    </div>
  )


    return (
        <form className = {Styles.form}>
            <Field component = {renderContactTypes} name = 'category' />
            <Field type = 'text' name = 'company' label = 'Company' component = {renderInput} />
            <Field type = 'text' name = 'firstName' label = 'First name' component = {renderInput} />
            <Field type = 'text' name = 'lastName' label = 'Last name' component = {renderInput} />
            <Field type = 'text' name = 'branch' label = 'Division/Branch' component = {renderInput} />
            <Field type = 'tel' name = 'phone' label = 'Phone' component = {renderInput} />
            <Field type = 'tel' name = 'mobile' label = 'Mobile' component = {renderInput} />
            <Field type = 'email' name = 'email' label = 'Email' component = {renderInput} />


            <div className ={Styles.form__mainbilling} >
                <h4>Main billing address</h4>
                <Field type = 'text' name = 'address1' label = 'Address' component = {renderInput} />
                <Field type = 'text' name = 'address2' label = '' component = {renderInput} />
                <Field type = 'text' name = 'city' label = 'City' component = {renderInput} />
                <Field type = 'text' name = 'County' label = 'State/Country' component = {renderInput} />
                <Field 
                    type = 'postal' 
                    name = 'postCode' 
                    label = 'post/zib code' 
                    component = {renderInput} 
                    className = {`${Styles.form__inputHalf}`}
                />
                <div className = {`${Styles.form__checkbox}`}>
                    <div></div>
                    <label>
                        <span>Also make Site Address</span>
                        <Field
                            name="employed"
                            id="employed"
                            component="input"
                            type="checkbox"
                        />
                    </label>
                    
                </div>
            </div>
            <button type = 'submit' className = {`${Styles.form__button}`}>
                Create Contact
            </button>
        </form>
    )
}

const validate = values => {
    const errors = {};
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
    return errors;
}
export default reduxForm({
    form: 'contactForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(Form);