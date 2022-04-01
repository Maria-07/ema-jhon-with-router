import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>

      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
