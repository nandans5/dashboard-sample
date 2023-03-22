import "./styles.css";

const ProjectCard = (props) => {
  console.log(props);
  return (
    <div className="card">
      <div className="card-info">
        <h4>Sample Headline</h4>
        <div>
          <b>Prospects:</b> {props.prospects}
          <br />
          <b>Offers:</b> {props.offers}
        </div>
        <br />
        <div>
          Nam sit amet sapien nec,
          <br />
          sed quam libero auctor.
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
