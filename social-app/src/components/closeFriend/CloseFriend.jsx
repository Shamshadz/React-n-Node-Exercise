import "./closeFriend.css";

export default function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sideBarFriend">
      <img
        // crossOrigin="anonymous"
        src={PF + user.profilePicture}
        alt=""
        className="sideBarFriendImg"
      />
      <span className="sideBarFriendName">{user.username}</span>
    </li>
  );
}
