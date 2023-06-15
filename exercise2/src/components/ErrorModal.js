import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const handleClick = () => {
    props.onConfirm();
  };

  return (
    <div className={classes["backdrop"]}>
      <div className={classes["error-modal-div"]}>
        <div className={classes["error-modal-title"]}>{props.title}</div>
        <div className={classes["error-modal-summary"]}>{props.summary}</div>
        <div className={classes["error-modal-button-div"]}>
          <button onClick={handleClick}>Okay</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
