import React from "react";
import Button from "@material-ui/core/Button";
import "./navbar.css";

const Navbar = (props) => {
  const onClicked = () => {
    props.onSubmit(1);
  };

  return (
    <div>
      <div className="mainpage">
        <div className="heading">
          <p className="title">LetsGrowMore</p>
        </div>
        <div className="headingbtn">
          <p className="desc">Click Here to View the Person Info</p>
          <button className="btn draw-border" onClick={onClicked}>
            Get Users
          </button>
        </div>
      </div>
      <hr />
      <div className="tasks">
        <ul>
          <li>
            {" "}
            Create a User card grid layout having a navbar showing any brand
            name
          </li>

          <li>
            {" "}
            Add a button in the navbar saying 'Get Users', which makes an API
            call to get the user data
          </li>

          <li>
            {" "}
            Use{" "}
            <a href="https://reqres.in/api/users?page=1">
              https://reqres.in/api/users?page=1
            </a>{" "}
            to get the data
          </li>

          <li> Show a loader while the API fetches the data.</li>

          <li> Use custom CSS/SASS/styled-components. </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
