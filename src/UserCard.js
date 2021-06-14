import React from "react";

const UserCard = ({ user, setUserId, setShowHide }) => {
  const handleButton = () => {
    setUserId(user.id);
    setShowHide({
      home: false,
      profile: true,
    });
  };

  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Username : {user.username}</p>
      <p>Email : {user.email}</p>
      <p>Phone : {user.phone}</p>
      <button className="btn" onClick={handleButton}>
        See More
      </button>
    </div>
  );
};

export default UserCard;
