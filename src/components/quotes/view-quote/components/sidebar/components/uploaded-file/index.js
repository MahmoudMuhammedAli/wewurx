import { image } from "faker";
import React from "react";
import { Field } from "redux-form";
import Styles from "./uploaded-file.module.scss";

const UploadedComponent = ({ src, fileName, onDelete }) => {
  return (
    <div className={Styles.uploadedfile}>
      <div className={Styles.uploadedfile__image}>
        <img src={src} alts='fake image' title='fake image' />
        <p>{fileName}</p>
      </div>
      <input type='text' className={Styles.uploadedfile__input} />
      <i className='fa fa-window-close' onClick={onDelete}></i>
    </div>
  );
};

export default UploadedComponent;
