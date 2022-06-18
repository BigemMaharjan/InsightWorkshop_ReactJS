import axios from "axios";
import React, { Component } from "react";
import "./RegisterLogin.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  submitLogin = async (e) => {
    e.preventDefault();
    const signin = {
      email: this.state.email,
      password: this.state.password,
    };
    await axios
      .post("http://localhost:8000/api/signin", signin)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("userID", response.data);

        window.location.href = "/userProfile";
        this.setState({
          checkLogin: true,
        });
      })
      .catch((err) => {
        alert("Invalid Credentials");
        console.log(err.response);
      });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <section className="registrationLogin" id="registrationLogin">
          <form onSubmit={this.submitLogin}>
            <div className="inputBox">
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
                Login
              </button>
              <a href="/" className="a">
                Register
              </a>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default Login;
