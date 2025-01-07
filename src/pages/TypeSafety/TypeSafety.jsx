import PropTypes from "prop-types";
import React from "react";

function TypeSafety(props) {
  return (
    <>
      <div>
        <p> Name: {props.name} </p>
        <p> Email: {props.email} </p>
        <p> Age: {props.age} </p>
        <p> This person is {props.status ? "Married" : "Unmarried"} </p>
        {props.friends.map((fname, index) => {
          return <p style={{ display: "inline" }} key={index}>{fname}</p>;
        })}
      </div>
    </>
  );
}

TypeSafety.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired,
  friends: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TypeSafety;
