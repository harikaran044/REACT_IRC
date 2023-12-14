import React from 'react';
import {Link} from 'react-router-dom';
import "./login.css";

const Login = () => {
    return (
      <div className="Login">
        <h4>Login/<Link to='/Signup'>SignUp</Link></h4>
        
        <form>
          <div className="text_area">
            <input
              type="Username"
              id="Username"
              name="Username"
              placeholder="Username"
              className="text_input"
              required

            />
          </div>
          <div className="text_area">
            <input
              type="Password"
              id="Password"
              name="Password"
              placeholder="Password"
              maxLength={8}
              className="text_input"
              required

            />
          </div>
          <div  classname='button'>
          <button type ='submit'>Login</button>
          </div>
          
        </form>

      </div>
    )
  }

export default Login;