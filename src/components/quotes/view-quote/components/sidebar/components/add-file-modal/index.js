import React from "react";
import Styles from "./add-file-modal.module.scss";
import Modal from "../../../../../../shared/modal";

const AddFileModal = ({ isModalOpened, setIsModalOpened }) => {
  return (
    <Modal isOpen={isModalOpened}>
      <div className={Styles.addfile}>
        <p className={Styles.addfile__description}>
          Overall size should be less than 28.6 megabytes
        </p>
        <main className={Styles.addfile__main}></main>
        <footer className={Styles.addfile__footer}>
          <button className={Styles.addfile__btn}>
            <i className='fa fa-plus'></i> Add files
          </button>
          <button
            onClick={() => setIsModalOpened(false)}
            className={Styles.addfile__closebtn}
          >
            Close Modal
          </button>
        </footer>
      </div>
    </Modal>
  );
};

export default AddFileModal;
