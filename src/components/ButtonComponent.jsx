import React from "react";

const ButtonComponent = ({ label, customStyles, handleSaludo }) => {
  return (
    <button style={customStyles} onClick={handleSaludo}>
      {label}
    </button>
  );
};

export default ButtonComponent;
