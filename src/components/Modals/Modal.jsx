import React from "react";
import { toast } from "react-toastify";
import "./Modal.css";
import { useGlobalContext } from "@/components/GlobalContext/GlobalContext";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";

const Modal = ({ header, submitAction, buttonText, isRegister }) => {
  const { auth } = useGlobalContext();
  const { modal } = useGlobalContext();
  let [loading, setLoading] = useState(false);
  const handleClose = () => {
    modal.closeModal();
  };

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("submitting form");
    const formData = [...e.target.elements].filter(
      (element) => element.type !== "submit"
    );
    const data = formData.reduce((acc, cur) => {
      acc[cur.name] = cur.value;
      return acc;
    }, {});

    // if empty fields
    if (Object.values(data).some((value) => value === "")) {
      toast.error("Please fill in all fields");
      setLoading(false);
      return;
    }
    if (isRegister && data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }
    // register or login
    if (isRegister) {
      auth.register(data).finally(() => {
        setLoading(false);
      });
    } else {
      console.log("logging in");
      auth.login(data).finally(() => {
        setLoading(false);
      });
    }
  };
  return (
    <div className="modal-container">
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
                {buttonText}{" "}
                <span>
                  <ClipLoader
                    loading={loading}
                    size={10}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
