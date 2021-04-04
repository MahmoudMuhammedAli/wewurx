import React from "react";
import { connect } from "react-redux";
import { changeQuoteFileDescription } from "../../../../../../../actions";
import Styles from "./uploaded-file.module.scss";

const UploadedComponent = ({
  src,
  fileName,
  onDelete,
  description,
  inputName,
  changeQuoteFileDescription,
}) => {
  const handleInputChange = (e) => {
    changeQuoteFileDescription(inputName, e.target.value);
  };
  return (
    <div className={Styles.uploadedfile}>
      <div className={Styles.uploadedfile__image}>
        <img src={src} alts='fake image' title='fake image' />
        <p>{fileName}</p>
      </div>
      <input
        type='text'
        className={Styles.uploadedfile__input}
        value={description}
        onChange={handleInputChange}
      />
      <i className='fa fa-window-close' onClick={onDelete}></i>
    </div>
  );
};

export default connect(null, { changeQuoteFileDescription })(UploadedComponent);
