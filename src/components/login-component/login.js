
import React from 'react';

function Login() {
  return (
    <div className="flex login" >
      <div class="flex flex-column center container">
        <div class="logo">
          <img src={require('../../assets/images/logs/logo.svg')} width="220" class="img-logo"></img>
        </div>
        <div class="flex center flex-column inputs">
          <input class="input" type="text" name="username" />
          <input class="input" type="password" name="password" />
          <button class="button-login" >Login</button>
          <a class="sing-up" >Sing up</a>
        </div>
      </div>

    </div>
  );
}

export default Login;
