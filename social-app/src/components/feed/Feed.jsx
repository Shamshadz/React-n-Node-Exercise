import "./feed.css";
import Share from "../../components/share/Share";
import Post from "../../components/post/Post";
import { useState,useEffect } from "react";
import axios from 'axios';


export default function Feed() {
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () =>{
      const res = await axios.get("posts/timeline/63e3d40746f5b76933e0c093");
      setPosts(res.data);
    }
    fetchPosts();  
  }, [])
  

  return (
    <div className="feed" >
      <div className="feedWrapper">
        <Share />
        {posts.map((p)=>(
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}
