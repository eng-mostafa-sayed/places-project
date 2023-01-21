import React from "react";
import "../../css/user/components/usersList.css";
import UserItem from "./userItem";
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
          <h2>no users found.</h2>
        </div>
      )}
    </div>
  );
};

export default UsersList;
