import TypeWriter from "../DynamicChanges/TypeWriter/TypeWriter";
import "./SubHeading.css";

const SubHeading = () => {
  return (
    <div>
      <h2 className="subheading-title">
        Follow the moments of
        <br />
        <TypeWriter />
      </h2>
    </div>
  );
};

export default SubHeading;