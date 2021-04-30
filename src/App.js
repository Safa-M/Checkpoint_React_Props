import "./App.css";
import Data from "./profile/profile";
import PropTypes from "prop-types";
function App() {
  const HandleName = (name) => alert(name);
  return (
    <>
      <div className="App">
        <br />
          <Data FullName="Safa Mohamed"
          Profession="Joined Go My Code as a Full-Stack JS student"
          Bio="Safa is a 25 years old electrical and automation engineer who graduated from 
          the National Engineering School Of Gabes ENIG, which is endowed with robotics and embedded systems,
          with a humbled knowledge in industrial diagnosis and maintenance."
          HandleName={HandleName}>
            <img src={"/IMG.jpg"} alt=""></img>
          </Data>
          <br />
          <br />
      </div>
    </>
  );
}
Data.propTypes = {
  FullName: PropTypes.string.isRequired,
  Profession: PropTypes.string.isRequired,
  Bio: PropTypes.string.isRequired,
};
export default App;
