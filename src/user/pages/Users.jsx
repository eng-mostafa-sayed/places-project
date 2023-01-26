import React from "react";
import UsersList from "../components/usersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "John",
      email: "john@gmail.com",
      places: 3,
      image: "http://bit.ly/3HndUbe",
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
