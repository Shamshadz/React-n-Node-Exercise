import "./home.css";
import TopBar from "../../components/topBar/TopBar";
import Feed from "../../components/feed/Feed";
import SideBar from "../../components/sideBar/SideBar";
import RightBar from "../../components/rightBar/RightBar";


export default function Home() {
  return (
    <>
      <TopBar/>
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  )
}
