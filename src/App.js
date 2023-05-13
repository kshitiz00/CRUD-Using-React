import "./App.css";
import Create from "./components/Create";
import { Routes, Route } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Create></Create>} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
