import React, { Component } from "react";
import axios from "axios";
import "./Profile.css";

class UserProfile extends Component {
  state = {
    profile: [],
    id: localStorage.getItem("userID"),
  };

  componentDidMount() {
    console.log("AfterLogin" + this.state.id);
    axios
      .get("http://localhost:8000/api/profile/62ad7ed066edeef573c66086")
      //   .get("http://localhost:8000/api/profile/" + this.state.id)
      .then((response) => {
        console.log(response.data);
        this.setState({
          profile: response.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  render() {
    const userType = this.state.profile.type;
    return (
      <div>
        <div className="col-md-8 mt-1">
          <h1 className="m-3 pt-3 myprofile">User Profile</h1>
          <div className="card mb-3 profile-content">
            <div className="card-body">
              <div className="col-md-3">
                <h5>Name :</h5>
              </div>
              <div className="col-md-9 text-secondary">
                {this.state.profile.name}
              </div>

              <hr></hr>

              <div className="col-md-3">
                <h5>Email :</h5>
              </div>
              <div className="col-md-9 text-secondary">
                {this.state.profile.email}
              </div>

              <hr></hr>

              <div className="col-md-3">
                <h5>Address :</h5>
              </div>
              <div className="col-md-9 text-secondary">
                {this.state.profile.address}
              </div>

              <hr></hr>

              <div className="col-md-3">
                <h5>Type :</h5>
              </div>
              <div className="col-md-9 text-secondary">
                {this.state.profile.type}
              </div>

              <hr></hr>
              <a
                href={"/updateprofile/" + this.state.profile._id}
                className="btn1"
              >
                Update
              </a>

              {/* Checking whether the logged in person in user or admin */}
              {userType === "user" ? (
                <button className="btn3">Thanks</button>
              ) : (
                <a href="/userList" className="btn3">
                  All User
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
