import React from "react";
import { connect, useSelector } from "react-redux";
import { addQuoteFile } from "../../../../../../../actions";
import Styles from "./hidden-inputs.module.scss";

const HiddenInputs = ({ addQuoteFile }) => {
  const { uploadedQuoteFiles } = useSelector((state) => state);
  const inputFiles = [];

  const readFile = (changeEvent, inputName) => {
    var reader = new FileReader();

    reader.onload = function (loadEvent) {
      const src = loadEvent.target.result;
      const fileName = changeEvent.target.files[0].name;
      const file = changeEvent.target.files[0];
      console.log({
        inputName,
        src,
        fileName,
        file,
      });

      addQuoteFile(inputName, fileName, file, src);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  const mapInputFiles = () => {
    if (uploadedQuoteFiles) {
      for (let i = 0; i <= uploadedQuoteFiles.length; i++) {
        const handleInputChange = (changeEvent) => {
          readFile(changeEvent, `file${i}`);
          console.log("from change ");
        };
        inputFiles.push(
          <input
            key={i}
            type='file'
            hidden
            id={`inputFile${i + 1}`}
            onChange={handleInputChange}
          />
        );
      }
    }
  };

  mapInputFiles();
  console.log(inputFiles, "from input Fiels");

  return <div>{inputFiles}</div>;
};

export default connect(null, { addQuoteFile })(HiddenInputs);
