import React from "react";

const footerNavStyles = {
  width: "100vw",
  height: "40px",
  backgroundColor: "black",
  color: "white",
};

const MainLayout = ({ children, title }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={footerNavStyles}>{title}</div>
      <div>{children}</div>
      <div style={footerNavStyles}>Footer</div>
    </div>
  );
};

export default MainLayout;
