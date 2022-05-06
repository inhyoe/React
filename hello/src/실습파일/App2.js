// import "./components/Hello"; --> 이렇게 쓰면 안된다.
import './App.css';
import Hello from "../components/Hello";

function App() {
  const name = "react";
  return(
    // <div>
    <>
       <div>
      <>
        <Hello name="react"></Hello>
        <Hello></Hello>
        <Hello></Hello>
        <div className="test">{name}</div> {/* 변수 사용할 때는 const사용 */}
      </> {/* Fragment */}
      </div> 
      <div>
        <Hello name="react"></Hello>
      </div>
      
    </> // 이 부분을 지워보고 한번 실행해 볼 것.
  )
}

export default App;