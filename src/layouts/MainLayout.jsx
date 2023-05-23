import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
        {children}
    </div>
  );
};

export default MainLayout;
