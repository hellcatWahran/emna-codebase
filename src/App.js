import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [userId, setUserId] = useState(1);
  const [showHide, setShowHide] = useState({
    home: true,
    profile: false,
  });
  return (
    <>
      <Header />
      {showHide.home && (
        <UserList setUserId={setUserId} setShowHide={setShowHide} />
      )}
      {showHide.profile && <UserDetail id={userId} setShowHide={setShowHide} />}
      {/* <HashRouter>
        <div className="App">
          <Route path="/" exact>
            <UserList />
          </Route>
          <Route
            path="/profile/:id"
            render={(props) => <UserDetail {...props} />}
          />
        </div>
      </HashRouter> */}
      <Footer />
    </>
  );
}

export default App;
