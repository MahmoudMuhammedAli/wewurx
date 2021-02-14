import React, { useState } from "react";
import { useSelector, connect } from "react-redux";
import Styles from "./addfiles.module.scss";

import {
  increaseNumberOfInvoiceInputFiles,
  removeInvoiceFile,
  addInvoiceFile,
} from "../../../../../../../actions";

const AddFiles = (props) => {
  const state = useSelector((state) => state);
  const [currentInput, setCurrentInput] = useState(1);
  const [imagesSources, setImageSources] = useState([]);
  const InputFilesArray = [];

  const numberOfInvoiceInputFiles =
    state.sendInvoiceFiles.numberOfInvoiceInputFiles;

  const { invoiceInputFilesValues } = state.sendInvoiceFiles;
  console.log(imagesSources, "from image sources");
  const readFile = (e, name) => {
    var reader = new FileReader();

    reader.onload = function (e) {
      setImageSources((srcs) => [...srcs, { name, src: e.target.result }]);
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  const mapInputFiles = (e) => {
    for (let i = 1; i <= numberOfInvoiceInputFiles; i++) {
      const handleInputChange = (e) => {
        props.addInvoiceFile(`file${i}`, e.target.files[0]);
        readFile(e, `file${i}`);
      };
      InputFilesArray.push(
        <div className={Styles.addfiles__inputFileWrapper}>
          <input
            key={i}
            type='file'
            hidden
            id={`inputFile${i}`}
            onChange={handleInputChange}
          />
        </div>
      );
    }
  };

  mapInputFiles();
  const handleButtonClick = () => {
    document.getElementById(`inputFile${currentInput}`).click();
    props.increaseNumberOfInvoiceInputFiles();
    setCurrentInput((num) => num + 1);
  };

  const handleImageClick = (fileName) => {
    props.removeInvoiceFile(fileName);

    const filteredSrcs = imagesSources.filter(({ name }) => {
      console.log(name, fileName, "from name and file name");
      return name !== fileName.name;
    });
    setImageSources(filteredSrcs);
  };
  console.log(invoiceInputFilesValues, "from invoiceINputFiles");

  const renderImages = () => {
    return imagesSources.map(({ name, src }) => {
      return (
        <div className={Styles.addfiles__imagesContainer}>
          <img
            src={src}
            alt='uploaded File'
            data-name={name}
            key={name}
            width='100'
            height='100'
          />

          <button onClick={() => handleImageClick({ name })}>
            <i className='fa fa-close'></i>
          </button>
        </div>
      );
    });
  };

  return (
    <div className={Styles.addfiles}>
      {InputFilesArray}
      <button className={Styles.addfiles__btn} onClick={handleButtonClick}>
        + Add files{" "}
      </button>
      {renderImages()}
    </div>
  );
};

export default connect(null, {
  increaseNumberOfInvoiceInputFiles,
  removeInvoiceFile,
  addInvoiceFile,
})(AddFiles);
