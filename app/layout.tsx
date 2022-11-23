import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header>my header</header>
      <main>{children}</main>
      <footer>my footer</footer>
    </div>
  );
};

export default Layout;
