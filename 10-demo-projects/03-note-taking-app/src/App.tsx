import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
      </Routes>
    </>
  )
}

export default App
