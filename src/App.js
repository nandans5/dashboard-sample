import ProjectsList from "./components/ProjectsList/ProjectsList";
import "./App.css";
import { Fragment } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="main-layout">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div>
        <Fragment>
          <Header />
          <ProjectsList />
        </Fragment>
      </div>
    </div>
  );
}

export default App;
