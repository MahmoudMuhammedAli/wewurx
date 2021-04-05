import React from "react";
import FilesComponent from "../files-component";
import Styles from "./files-directory.module.scss";

const FilesDirectory = ({ filesList }) => {
  const renderComponents = () => {
    return filesList.map(({ imageSrc, description }, index) => {
      return (
        <FilesComponent
          imageSrc={imageSrc}
          description={description}
          id={index}
          s
        />
      );
    });
  };
  return <div className={Styles.files}>{renderComponents()}</div>;
};

export default FilesDirectory;
