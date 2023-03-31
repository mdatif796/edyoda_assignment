import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DropdownContainer from "./DropdownContainer";
import Home from "./Home";
import Instructor from "./Instructor";
import Menu from "./Menu";
import Module from "./Module";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <DropdownContainer />
        <div className="Remain">
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/module" element={<Module />} />
            <Route path="/instructor" element={<Instructor />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
