import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Styles from "./modal.module.scss";

// get the element that you want to append your modal into
const modalRoot = document.getElementById("modal");

const Modal = ({ children, isOpen }) => {
  // element to which the modal will be rendered
  const el = document.createElement("div");

  useEffect(() => {
    // append to root when the children of Modal are mounted
    modalRoot.appendChild(el);

    // do a cleanup
    return () => {
      if (!isOpen) {
        modalRoot.removeChild(el);
      }
    };
  }, [el]);
  const preventScrolling = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (isOpen) {
      el.addEventListener("wheel", preventScrolling);
      window.scrollTo(0, 0);
    }
    return () => {
      el.removeEventListener("wheel", preventScrolling);
    };
  });
  return (
    isOpen &&
    createPortal(
      // child element
      <div className={Styles.modal}>{children}</div>,
      // target container
      el
    )
  );
};
export default Modal;
