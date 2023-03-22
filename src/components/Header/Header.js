import "./styles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";

const Header = () => {
  return (
    <nav className="nav">
      <ul data-testid="nav-bar-list">
        <li>
          <SettingsIcon />
        </li>
        <li>
          <AccountCircleIcon />
        </li>
        <li className="header-text">username</li>
      </ul>
    </nav>
  );
};

export default Header;
