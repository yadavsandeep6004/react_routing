import "./style.css";
import { Link } from "react-router-dom";

const DesktopNavbar = () => {
  return (
    <div className="desktop-Nav">
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/ourwork"> Our-work </Link>
        </li>
        <li>
          <Link to="/ourblog"> Our-Blog </Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/login"> Login </Link>
        </li>
        <li>
          <Link to="/signup"> Signup </Link>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNavbar;
