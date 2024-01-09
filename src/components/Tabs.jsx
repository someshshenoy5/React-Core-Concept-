import React, { Children } from "react";

const Tabs = ({ children, buttons }) => {
  return (
    <>
      <menu>
        {buttons}
      </menu>
      {children}
    </>
  );
};

export default Tabs;
