import React, { useContext } from "react";
import { userContext } from "../../App";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  return (
    <div>
      <h1 class="text-center">Dashboard Page</h1>
      <h2>Welcome {loggedInUser.name}</h2>
      <p>{loggedInUser.email}</p>
      <img src={loggedInUser.photo} alt="" />
    </div>
  );
};

export default Dashboard;
