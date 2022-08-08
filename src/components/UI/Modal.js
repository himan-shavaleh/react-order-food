import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const BackDrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop}></div>;
};
const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const overlayContainer = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        overlayContainer,
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        overlayContainer,
      )}
    </>
  );
};
export default Modal;
