import { Link } from "react-router-dom";
import viteLogo from "/vite.svg";

const LogoComponent = () => {
  return (
    <div id="logo">
      <Link to="/" className="text-2xl font-bold text-gray-800">
        <img src={viteLogo} alt="Logo" />
      </Link>
    </div>
  );
};
export default LogoComponent;
