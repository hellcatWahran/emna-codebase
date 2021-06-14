import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import UserCard from "./UserCard";

const UserList = ({ setUserId, setShowHide }) => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => {
        setListOfUsers(res.data);
        setLoading(false);
      }) //
      .catch((err) => setErr(true));
  }, []);
  if (loading) {
    return <Spinner animation="border" variant="secondary" />;
  }

  return (
    <div className="list">
      {listOfUsers.map((user) => (
        <UserCard
          user={user}
          key={user.id}
          setUserId={setUserId}
          setShowHide={setShowHide}
        />
      ))}
    </div>
  );
};

export default UserList;
