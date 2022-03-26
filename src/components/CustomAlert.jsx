import React from "react";

const CustomAlert = ({ customAlert }) => {
  return (
    <>
      {customAlert && (
        <div
          className={`alert text-center fs-5 ${customAlert.type}`}
          role="alert"
        >
          <img
            style={{ width: "25px", height: "25px" }}
            className="me-2"
            src={customAlert.img}
            alt="img"
          />
          {customAlert.text}
        </div>
      )}
    </>
  );
};

export default CustomAlert;
