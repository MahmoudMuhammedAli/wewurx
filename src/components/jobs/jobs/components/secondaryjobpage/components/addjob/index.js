import React from "react";
import Styles from "./addjob.module.scss";
import AddCustomer from '../addcustomer';
import {reduxForm, Field} from 'redux-form';

const renderField = ({input,type,label, placeholder,meta:{touched,error}}) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type = {type}  placeholder = {placeholder}/>
        {touched&& error&& <span>{error}</span>}
      </div>
    </div>
  )
}


const AddJob = (props) => {
  return <div className = {Styles.addjob}>
    
    <div className = {Styles.addjob__customerseletor}>
      <AddCustomer />
        <span className = {Styles.addjob__customerseletor__label}>customer</span>
        <i className = 'fa fa-arrow-down fa-lg'></i>
        <span className = {Styles.addjob__customerselector__selected}>wewurx</span>
        

      </div>
    <form>
      
      
    </form>
  </div>
};

export default reduxForm({
  form:'addCustomer'
})(AddJob);
