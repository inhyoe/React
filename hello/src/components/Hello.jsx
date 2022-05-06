import React from "react";

function Hello({ props, color }){
    return <div style={{ color }}>Hello {props}</div>;
}

export default Hello;

// import React from "react";

// function Hello({ name, color }) {
//   return <div style={{ color }}>Hello {name}</div>;
// }
// export default Hello;