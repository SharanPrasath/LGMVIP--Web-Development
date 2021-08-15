import React, { Component } from "react";
import CardInfo from "./cardinfo";
import Navbar from "./navbar";
import Loading from "./loading";
import "./navbar.css";

class App extends Component {
  constructor() {
    super();
    //declaring constructors to avoid errors regarding undefined variables

    this.state = {
      users_data: [],
      isClicked: false,
    };
  }

  onSubmit = () => {
    this.setState({ isClicked: !this.isClicked });
    //setTimeout is used so that there is a delay in fetching the data and the loader appears till it fetches
    setTimeout(() => {
      fetch("https://reqres.in/api/users?page=1")
        .then((response) => {
          return response.json();
        })
        .then((users) => {
          console.log(users);
          this.setState({ users_data: users.data });
        });
    }, 3000);
  }

  render() {
    if (this.state.users_data.length === 0 && this.state.isClicked === false) {
      return (
        <div>
          <Navbar onSubmit={this.onSubmit} />
        </div>
      );
    } else if (this.state.users_data.length === 0) {
      return (
        <div>
          <Loading></Loading>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <CardInfo people={this.state.users_data} />
          </div>
        </div>
      );
    }
  }
}

export default App;
