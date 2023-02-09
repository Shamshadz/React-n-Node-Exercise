import "./profile.css";
import Topbar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sideBar/SideBar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightBar/RightBar";
import { useState,useEffect } from "react";
import axios from "axios";


export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/users?username=chandler");
      setUser(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}person/noCover.png`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}person/noAvatar.png`}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="chandler" />
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}