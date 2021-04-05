import React from "react";
import Styles from "./files-component.module.scss";

const FilesComponent = ({ description, imageSrc }) => {
  return (
    <div className={Styles.file}>
      <img src={imageSrc} alt='random image' title='random image' />
      <p>{description}</p>
    </div>
  );
};

export default FilesComponent;
