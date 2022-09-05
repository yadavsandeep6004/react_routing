import { removeData } from "../../services/storge";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import "./style.css";

const Logout = () => {
  const Navigate = useNavigate();

  const logOut = () => {
    removeData("User");
    Navigate("/login");
  };

  return (
    <div>
    <button className="logout" onClick={logOut}>
      <MdLogout />
    </button>
    </div>
  );
};

export default Logout;
