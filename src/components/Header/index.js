import DesktopNavbar from "../DesktopNavbar";
import { MdImportantDevices } from "react-icons/md";
import Logout from "../Logout";
import AppModal from "../AppModal";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <MdImportantDevices />
      </div>

      <div className="header-desktop-nav">
        <DesktopNavbar />
        <Logout />
      </div>

      <div className="header-mobile-nav">
        <Logout />
        <AppModal />
      </div>
    </header>
  );
};

export default Header;
