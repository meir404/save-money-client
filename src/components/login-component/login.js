
import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import authService from '../../services/auth.service';


function Login() {
  const history = useHistory();
  const [data, setData] = useState({});
  const clickLogin = () => {
    console.log('data', data);
    authService.signUp(data).then(s => { history.push('/Home'); }).catch(e => { });
  }
  const onChange = (prop, value) => {
    data[prop] = value;
    setData(data);
  }
  return (
    <div className="flex center container-login" >
      <div className="flex flex-column center container">
        <div className="logo">
          <img src={require('../../assets/images/logs/logo.png')} alt="logo" width="180" className="img-logo"></img>
        </div>
        <div className="flex center flex-column inputs">
          <input className="input" type="text" name="username" placeholder="Email" value={data.email} onChange={(e) => onChange('email', e.target.value)} />
          <input className="input" type="password" name="password" placeholder="Password" value={data.password} onChange={(e) => onChange('password', e.target.value)} />
          <button className="button" onClick={() => { clickLogin() }} >Login</button>
          <Link to="/SingUp" className="sing-up" >Sing up</Link>
        </div>
      </div>

    </div>
  );
}

export default Login;
