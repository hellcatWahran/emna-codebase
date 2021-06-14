import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const UserDetail = ({ id, setShowHide }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [err, setErr] = useState("");
  const gettingData = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
        console.log(res.data);
      }) //;setLoading(true)}
      .catch((err) => setErr(err.response.data));
  };
  useEffect(() => gettingData(), []);

  const showHome = () => {
    setShowHide({
      home: true,
      profile: false,
    });
  };

  return (
    <div className="detail">
      {loading ? (
        <Spinner animation="border" variant="secondary" />
      ) : (
        <ActualStuff user={user} showHome={showHome} />
      )}
    </div>
  );
};

const ActualStuff = ({ user, showHome }) => {
  return (
    <div className="detail-box">
      <div className="user-detail">
        <p>Infos : </p>
        <p>Name : {user.username}</p>
        <p>Email : {user.email}</p>
        <p>Address : {`${user.address.street}, ${user.address.city}`}</p>
        <p>Phone : {user.phone}</p>
        <p>Website : {user.website}</p>
        <p>Geo : {`${user.address.geo.lat}, ${user.address.geo.lng}`}</p>
        <p>Company : {`${user.company.name}`}</p>
        <button className="btn" onClick={showHome}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UserDetail;
