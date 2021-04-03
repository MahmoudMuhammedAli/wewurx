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

  console.log(invoiceInputFilesValues, "from invoice input files values");
  const readFile = (event, name) => {
    var reader = new FileReader();

    reader.onload = function (e) {
      setImageSources((srcs) => [
        ...srcs,
        { name, src: e.target.result, fileName: event.target.files[0].name },
      ]);
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  const mapInputFiles = () => {
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
      return name !== fileName.name;
    });
    setImageSources(filteredSrcs);
  };

  const renderImages = () => {
    return imagesSources.map(({ name, src, fileName }) => {
      return (
        <div className={Styles.addfiles__imagesContainer} key={name}>
          <div className={Styles.addfiles__imagesContainer__image}>
            <img
              src={src}
              alt='uploaded File'
              data-name={name}
              key={name}
              width='30'
              height='30'
            />
            <span className={Styles.addfiles__imagesContainer__image__name}>
              {fileName}
            </span>
          </div>

          <button
            onClick={() => handleImageClick({ name })}
            className={Styles.addfiles__removefilebutton}
          >
            <i className='fa fa-times-circle-o'></i>
          </button>
        </div>
      );
    });
  };

  return (
    <div className={Styles.addfiles}>
      {InputFilesArray}
      {renderImages()}
      <button className={Styles.addfiles__btn} onClick={handleButtonClick}>
        + Add files{" "}
      </button>
    </div>
  );
};

export default connect(null, {
  increaseNumberOfInvoiceInputFiles,
  removeInvoiceFile,
  addInvoiceFile,
})(AddFiles);
