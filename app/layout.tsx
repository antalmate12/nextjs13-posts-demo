import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header
        style={{
          background: "red",
          color: "white",
          padding: "1rem",
          position: "sticky",
          top: "8px",
        }}
      >
        my header
      </header>
      <main>{children}</main>
      <footer>my footer</footer>
    </div>
  );
};

export default Layout;
