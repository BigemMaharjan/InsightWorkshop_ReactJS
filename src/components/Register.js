import React, { Component } from "react";
import axios from "axios";
import "./RegisterLogin.css";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  SignUp = async (e) => {
    e.preventDefault();
    const signup = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    await axios
      .post("http://localhost:8000/api/signup", signup)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <section className="registrationLogin" id="registrationLogin">
          <form onSubmit={this.SignUp}>
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
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
              />
              <button type="submit" className="btn">
                Register
              </button>
              <a href="/login" className="a">
                Login
              </a>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
export default Register;
