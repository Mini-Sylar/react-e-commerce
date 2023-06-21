import React from "react";
import { toast } from "react-toastify";
import "./Modal.css";
import { useGlobalContext } from "@/components/GlobalContext/GlobalContext";

const Modal = ({ header, submitAction, buttonText, isRegister }) => {
  const { auth } = useGlobalContext();

  const modalRef = React.useRef(null);
  const handleClose = () => {
    modalRef.current.style.display = "none";
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("submitting form");
    const formData = [...e.target.elements].filter(
      (element) => element.type !== "submit"
    );
    const data = formData.reduce((acc, cur) => {
      acc[cur.name] = cur.value;
      return acc;
    }, {});

    // check if passwords match
    if (isRegister && data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // register or login
    if (isRegister) {
      console.log("registering");
      console.log(data);
      auth.register(data);
    } else {
      console.log("logging in");
      auth.login(data);
    }

    console.log(data);
  };
  return (
    <div className="modal-container" ref={modalRef}>
      <div className="modal">
        <div className="modal-cancel">
          <button
            href="/"
            className="modal-cancel-button"
            onClick={handleClose}
          >
            X
          </button>
        </div>
        <div className="modal-header">
          <h3>{header}</h3>
        </div>
        <div className="modal-body">
          <form onSubmit={submitForm}>
            {isRegister && (
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" name="username" />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="form-control" />
            </div>
            {isRegister && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                />
              </div>
            )}
            <div className="form-group">
              <button type="submit" className="btn-rounded btn-submit">
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
