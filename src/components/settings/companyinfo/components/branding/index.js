import React, { useEffect, useRef, useState } from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./branding.module.scss";
import { connect } from "react-redux";

const renderField = ({ input, type, meta: { touched, error } }) => {
  return (
    <div className={Styles.branding__accentcolourinputwrapper}>
      #
      <input
        type={type}
        className={Styles.branding__accentcolourinputwrapper__input}
        {...input}
      />
      {touched && error && <span>{error}</span>}
    </div>
  );
};

const Branding = (props) => {
  const inputFileRef = useRef(null);
  const uploadButtonRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const handleUploadButtonClick = () => {
      inputFileRef.current.click();
    };
    if (uploadButtonRef.current) {
      uploadButtonRef.current.addEventListener(
        "click",
        handleUploadButtonClick
      );
    }

    return () => {
      if (uploadButtonRef.current) {
        uploadButtonRef.current.removeEventListener(
          "click",
          handleUploadButtonClick
        );
      }
    };
  }, [uploadButtonRef.current]);

  const handleUploadInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className={Styles.branding}>
      <h3 className={Styles.branding__heading}>Branding</h3>
      <div className={Styles.branding__logoinfo}>
        <h5 className={Styles.branding__logoinfo__label}>Logo</h5>
        <button ref={uploadButtonRef}>
          <div className={Styles.branding__logoinfo__addlogowrapper}>
            Add logo{" "}
            <span>
              <i className='fa fa-plus'></i>
            </span>
          </div>
          <p>500px x 200px, JPG, GIF or PNG</p>
        </button>
      </div>
      <div className={Styles.branding__colouringinfo}>
        <h5 className={Styles.branding__colouringinfo__label}>Accent colour</h5>
        <Field component={renderField} name='accentColour' />
        <div
          className={Styles.branding__colouringinfo__colorshower}
          style={{ backgroundColor: "#" + props.brandingColour }}
        ></div>
      </div>
      <input
        type='file'
        style={{ display: "none" }}
        ref={inputFileRef}
        onChange={handleUploadInputChange}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    brandingColour: state.form.brandingInfo?.values.accentColour,
  };
};
export default connect()(
  reduxForm({
    form: "brandingInfo",
  })(Branding)
);
