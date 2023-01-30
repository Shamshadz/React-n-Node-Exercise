import "./sideBar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <RssFeed className="sideBarIcon" />
            <span className="sideBarItemText">Feed</span>
          </li>
          <li className="sideBarListItem">
            <Chat className="sideBarIcon" />
            <span className="sideBarItemText">Chats</span>
          </li>
          <li className="sideBarListItem">
            <PlayCircleFilledOutlined className="sideBarIcon" />
            <span className="sideBarItemText">Videos</span>
          </li>
          <li className="sideBarListItem">
            <Group className="sideBarIcon" />
            <span className="sideBarItemText">Groups</span>
          </li>
          <li className="sideBarListItem">
            <Bookmark className="sideBarIcon" />
            <span className="sideBarItemText">Bookmarks</span>
          </li>
          <li className="sideBarListItem">
            <HelpOutline className="sideBarIcon" />
            <span className="sideBarItemText">Questions</span>
          </li>
          <li className="sideBarListItem">
            <WorkOutline className="sideBarIcon" />
            <span className="sideBarItemText">Job</span>
          </li>
          <li className="sideBarListItem">
            <Event className="sideBarIcon" />
            <span className="sideBarItemText">Events</span>
          </li>
          <li className="sideBarListItem">
            <School className="sideBarIcon" />
            <span className="sideBarItemText">Courses</span>
          </li>
        </ul>
        <button className="sideBarBtn">Show More</button>
        <hr className="sideBarHr" />
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
