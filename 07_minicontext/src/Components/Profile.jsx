import React, { useContext, useState } from "react";
import UserContextProvider from "../context/UserContextProvider";
import UserContext from "../context/UserContext";

const Profile = () => {
    const {user,pass} = useContext(UserContext);
  return (
    <>
      <h2>Profile</h2>
        <h3>Welcome to Mr.{user}</h3>
        <h3>Your Password : {pass}</h3>
    </>
  );
};

export default Profile;
