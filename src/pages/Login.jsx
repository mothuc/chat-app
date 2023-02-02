import React from "react";

function Login(props) {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="passwordd" placeholder="password" />
          <button>Sign in</button>
        </form>
        <p>
          You don't have an account? <span>Register</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Login;
