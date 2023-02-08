import "./topBar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import {Link} from "react-router-dom";

export default function TopBar() {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">SamSocial</span>
        </Link>
      </div>

      <div className="topBarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search for Post, photo & video"
            className="searchInput"
          />
        </div>
      </div>

      <div className="topBarRight">
        <div className="topBarLinks">
          <div className="topBarLink">
            <span className="topBarLink">Homepage</span>
            <span className="topBarLink">Timeline</span>
          </div>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <Person />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Chat />
            <span className="topBarIconBadge">2</span>
          </div>
          <div className="topBarIconItem">
            <Notifications />
            <span className="topBarIconBadge">1</span>
          </div>
        </div>
        <Link to="/profile/Id" style={{textDecoration:"none"}}>
          <img src="/assets/person/1.jpeg" alt="" className="topBarImg" />
        </Link>
      </div>
    </div>
  );
}
