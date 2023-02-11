import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState([]);
  const {user:currentUser} = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchPosts();
  }, [post.userId]);

  useEffect(()=>{
    setIsLiked(post.likes.includes(currentUser._id))
  }, [currentUser._id, post.likes])

  const likeHandler = async() => {
    try {
      await axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (error) {}
    setLike(!isLiked ? like + 1 : like - 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to="profile/id">
              <img
                src={user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"
                }
                alt=""
                className="postProfileImg"
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={PF + post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              crossOrigin="anonymous"
              src={`${PF}like.png`}
              alt=""
              className="postLikeIcon"
              onClick={likeHandler}
            />
            <img
              src={`${PF}heart.png`}
              alt=""
              className="postLikeIcon"
              onClick={likeHandler}
            />
            <span className="likeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post?.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
