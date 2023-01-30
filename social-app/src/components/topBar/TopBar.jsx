import "./topBar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

export default function TopBar() {
  return (
    <div className="topBarContainer">

      <div className="topBarLeft">
        <span className="logo">SamSocial</span>
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
        <img src="/assets/person/1.jpeg" alt="" className="topBarImg" />
      </div>
      
    </div>
  );
}
