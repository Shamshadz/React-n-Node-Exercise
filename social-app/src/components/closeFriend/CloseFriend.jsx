import "./closeFriend.css";

export default function CloseFriend({ user }) {
  return (
    <li className="sideBarFriend">
      <img src={user.profilePicture} alt="" className="sideBarFriendImg" />
      <span className="sideBarFriendName">J{user.username}</span>
    </li>
  );
}
