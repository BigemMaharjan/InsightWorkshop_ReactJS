import React, { Component } from "react";
import axios from "axios";
import "./Profile.css";

class UserList extends Component {
  state = {
    userList: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8000/api/userprofile/list")
      .then((response) => {
        console.log(response);
        this.setState({
          userList: response.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  deleteUser = (userID) => {
    axios
      .delete("http://localhost:8000/api/delete/" + userID)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  refreshPage() {
    window.location.reload(true);
  }

  render() {
    return this.state.userList.map((userList) => {
      return (
        <div className="col-md-8 mt-1">
          <h1 className="m-3 pt-3 myprofile">User Profile</h1>
          <div className="card mb-3 profile-content">
            <div className="card-body">
              <div className="col-md-3">
                <h5>Name :</h5>
              </div>
              <div className="col-md-9 text-secondary">{userList.name}</div>

              <hr></hr>

              <div className="col-md-3">
                <h5>Email :</h5>
              </div>
              <div className="col-md-9 text-secondary">{userList.email}</div>

              <hr></hr>

              <div className="col-md-3">
                <h5>Address :</h5>
              </div>
              <div className="col-md-9 text-secondary">{userList.address}</div>

              <hr></hr>

              <div className="col-md-3">
                <h5>Type :</h5>
              </div>
              <div className="col-md-9 text-secondary">{userList.type}</div>

              <hr></hr>
              <a href={"/updateprofile/" + this.userList._id} className="btn1">
                Update
              </a>
              <a href="/userlist">
                <button
                  className="btn2"
                  onClick={this.deleteUser.bind(this, userList._id)}
                >
                  Delete
                </button>
              </a>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default UserList;
