import React, { Component } from "react";
import axios from "axios";
import "./RegisterLogin.css";

class UpdateProfile extends Component {
  state = {
    name: "",
    email: "",
    address: "",
    // id: this.props.match.params._id,
  };

  componentDidMount() {
    axios
      // .get("http://localhost:8000/api/profile/" + this.state.id)
      .get("http://localhost:8000/api/profile/62ad7ed066edeef573c66086")
      .then((response) => {
        this.setState({
          name: response.data.name,
          email: response.data.email,
          address: response.data.address,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  Update = async (e) => {
    e.preventDefault();
    const update = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
    };
    await axios
      // .put(
      //   "http://localhost:8000/api/user/update/" + this.state.id,
      //   update
      // )
      .put(
        "http://localhost:8000/api/user/update/62ad7ed066edeef573c66086",
        update
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    const { name, email, address } = this.state;
    return (
      <div>
        <section className="registrationLogin" id="registrationLogin">
          <form onSubmit={this.Update}>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => {
                  this.setState({ name: event.target.value });
                }}
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(event) => {
                  this.setState({ address: event.target.value });
                }}
              />
              <a href="/userprofile" className="btn">
                Update
              </a>
              <a href="/userprofile" className="a">
                Cancel
              </a>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
export default UpdateProfile;
