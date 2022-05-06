// import "./components/Hello"; --> 이렇게 쓰면 안된다.
import './App.css';
import Hello from "./components/Hello";

function App() {
  return(
    <div>
      <Hello></Hello>
      <Hello></Hello>
      <Hello></Hello>
    </div>
  )
}

export default App;