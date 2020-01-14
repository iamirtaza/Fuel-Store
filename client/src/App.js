import React from "react";
import logo from "./logo.svg";
import AppRoutes from "./Routes/AppRoutes";
import "./App.css";
import { Row, Col } from "antd";
import Login from "./Pages/Login";
import SideBar from "./Components/SideBar";
import SearchBar from "./Components/SearchBar";
import TalentProfile from "./Pages/TalentProfile";

function App() {
  return (
    <div className="app"></div>
    // <div style={{ display: "flex" }}>
    //   <div>
    //   <SideBar />
    //     </div>
    //   <div className="let_it_scroll" style={{ width: "100vw" }}>
    //     <SearchBar />
    //     <TalentProfile />
    //   </div>
    //  </div>
  );
}

export default App;
