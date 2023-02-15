import React, { useContext } from "react";
import { UserContext } from "../context/user"
import Interests from "./Interests";

function Profile({ theme }) {

  const user = useContext(UserContext)
  console.log(user)

  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}

export default Profile;
