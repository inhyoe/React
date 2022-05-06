import React from "react";
import Hello from "./components/Hello";
import Wrapper from "./components/Wrapper";

function App() {
    return (
    <Wrapper> {/*  꼭 임포트를 해줘야함 */}
        <Hello props="react" color="skyblue"></Hello>
        <Hello></Hello>
    </Wrapper>
    );
    
}

export default App;