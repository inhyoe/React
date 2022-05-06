import React from "react";

function Hello({ props, color }){
    Hello.defaultProps ={
        props : "이름없음",
        color : "red"
    }; // jsx에서 default값을 줄 수 있음.
    return <div style={{ color }}>Hello {props}</div>;
}

export default Hello;

// import React from "react";

// function Hello({ name, color }) {
//   return <div style={{ color }}>Hello {name}</div>;
// }
// export default Hello;