import Loader from "react-loader-spinner";
import "./loading.css";
const Loading = () => {
  return (
    <div>
      <Loader
        className="loader"
        type="BallTriangle"
        color="#21E11B"
        height={180}
        width={180}
      />
    </div>
  );
};

export default Loading;
