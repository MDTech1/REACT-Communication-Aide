import logo from "./logo.svg";
import "./App.css";

import classes from "./Components/App.module.css";
import HomePage from "./Pages/HomePage";
import CategoriesPage from "./Pages/CategoriesPage";
import SingleChoicePage from "./Pages/SingleChoicePage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes className={classes.Main}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Categories/:id" element={<CategoriesPage />} />
        <Route path="/Option/:id" element={<SingleChoicePage />} />
      </Routes>
    </>
  );
}

export default App;
