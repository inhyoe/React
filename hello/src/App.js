import React from "react";
import Hello from "./components/Hello";

function App() {
    return (
    <>
        <Hello props="react" color="skyblue"></Hello>
        <Hello></Hello>
    </>
    );
    
}

export default App;