import ProjectCard from "../ProjectCard/ProjectCard";
import "./styles.css";

const ProjectsList = (props) => {
  console.log("new props", props);

  return (
    <div className="container">
      <h1 className="center">Open Projects</h1>
      <div className="center-div">
        <ProjectCard prospects={3} offers={1} />
        <ProjectCard prospects={4} offers={3} />
      </div>
      <h1 className="center">Finished Projects</h1>
      <div className="center-div">
        <ProjectCard prospects={6} offers={4} />
      </div>
    </div>
  );
};

export default ProjectsList;
