
import React from 'react';
import { Link, useHistory } from "react-router-dom";


function Login() {
  const history = useHistory();
  const clickLogin = () => {
    history.push('/Home');
  }
  return (
    <div className="flex center container-login" >
      <div className="flex flex-column center container">
        <div className="logo">
          <img src={require('../../assets/images/logs/logo.png')} alt="logo" width="180" className="img-logo"></img>
        </div>
        <div className="flex center flex-column inputs">
          <input className="input" type="text" name="username" placeholder="Email" />
          <input className="input" type="password" name="password" placeholder="password" />
          <button className="button" onClick={() => { clickLogin() }} >Login</button>
          <Link to="/SingUp" className="sing-up" >Sing up</Link>
        </div>
      </div>

    </div>
  );
}

export default Login;
