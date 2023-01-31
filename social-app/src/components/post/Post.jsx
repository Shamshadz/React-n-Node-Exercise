import "./post.css";
import { MoreVert } from "@mui/icons-material";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">Mary Jane</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey, BeautifulDay it is ..</span>
          <img src="/assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="assets/like.png" alt="" className="postLikeIcon" />
            <img src="assets/heart.png" alt="" className="postLikeIcon" />
            <span className="likeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">12 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
