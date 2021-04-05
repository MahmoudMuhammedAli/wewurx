import React from "react";
import Styles from "./uploaded-file.module.scss";

const UploadedFile = ({ src, inputName, fileName, handleFileRemove }) => {
  return (
    <div className={Styles.imagesContainer} key={inputName}>
      <div className={Styles.imagesContainer__image}>
        <img
          src={src}
          alt='uploaded File'
          data-inputName={inputName}
          width='30'
          height='30'
        />
        <span className={Styles.imagesContainer__image__inputName}>
          {fileName}
        </span>
      </div>

      <button
        onClick={() => handleFileRemove(inputName)}
        className={Styles.removefilebutton}
      >
        <i className='fa fa-times-circle-o'></i>
      </button>
    </div>
  );
};

export default UploadedFile;
