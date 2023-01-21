import React from "react";

import UserItem from "./userItem";
import Card from "../../shared/components/UIElements/Card";

import "../../css/user/components/usersList.css";

const UsersList = (props) => {
  return (
    <div>
      {props.items.length ? (
        <ul className="user-list">
          {props.items.map((user) => (
            <UserItem
              key={user.id}
              id={user.id}
              name={user.name}
              image={user.image}
              placeCount={user.places}
            />
          ))}
        </ul>
      ) : (
        <div className="center">
          <Card>
            <h2>no users found.</h2>
          </Card>
        </div>
      )}
    </div>
  );
};

export default UsersList;
