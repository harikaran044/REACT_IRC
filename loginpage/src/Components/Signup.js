import React, { Component } from 'react';
import "./Signup.css";

class Signin extends Component {
  render() {
    return (
      <div className="Signup">
        <h4>SignUp</h4>
        <form>

          <div className="text_area">
            <input
              type="Uername"
              id="Username"
              name="Username"
              placeholder="Username"
              className="text_input"
              required

            />
          </div>

          <div className="text_area">
            <input
              type="Email"
              id="Email"
              name="Email"
              placeholder='Email'
              className="text_input"
              required

            />
          </div>

          <div className="text_area">
            <input
              type="Password"
              id="Password"
              name="Password"
              placeholder='Password'
              className="text_input"
              required
            />
          </div>

          <div className="text_area">
            <input
              
              id="Phone Number"
              name="Phone Number"
              placeholder='Phone Number'
              maxLength={10}
              className="text_input"
              required
            />
          </div>

          <input
            type="submit"
            value="SignUp"
            className="btn"

          />
        </form>

      </div>
      
    )
  }
}

export default Signin;