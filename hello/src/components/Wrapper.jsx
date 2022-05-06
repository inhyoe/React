import React from "react";

function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px",
  };
  return <div style={style}>{children}</div>; 
  // children이 들어가지 않을 경우 원래 표시되어야 할 Hello 컴포넌트가 표시되지 않음.
}

export default Wrapper;