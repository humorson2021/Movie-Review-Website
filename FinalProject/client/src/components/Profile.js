import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user } = useAuth0();
  console.log(user);
  return (
    <div>
      <h1>Welcome to your profile, {user.nickname}!</h1>
      <img src={user.picture} alt="user's pic" />
      <p>{user.email}</p>
    </div>
  );
}