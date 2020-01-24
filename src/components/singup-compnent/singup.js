import React from 'react';
import { Link, useHistory } from "react-router-dom";

function SingUp() {
    const history = useHistory();
    const registerClick = () => {
        history.push('/Home');
    }
    return (
        <div className="container-sing-up flex center">
            <div className="flex center flex-column inputs">
                <div className="title"><h1>Register</h1></div>
                <input className="input" type="text" name="name" placeholder="Name" />
                <input className="input" type="text" name="username" placeholder="Email" />
                <input className="input" type="password" name="password" placeholder="password" />
                <input className="input" type="password" name="confirmPassword" placeholder="Confirm password" />
                <button className="button" onClick={() => registerClick()}>Register</button>
                <Link to="/Login" className="return-login" >Login</Link>
            </div>
        </div>
    );
}

export default SingUp;
