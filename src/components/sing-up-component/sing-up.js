import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import authService from '../../services/auth.service';


function SingUp() {
    const history = useHistory();
    const [data, setData] = useState({});
    const registerClick = () => {
        valid();
        authService.signIn(data).then(s => {
            history.push('/Home');
        })
    }
    const setValueData = (prop, value) => {
        data[prop] = value;
        setData(data);
    }
    const valid = () => {
        let errorText = "";
        if (!data.name) errorText += " name required"
        if (!data.email) errorText += " email required"
        if (!data.password) errorText += " password required"
        if (data.password !== data.confirmPassword) errorText += " password and confirm password not equal"
        if (errorText !== "") {
            alert(errorText);
            return false;
        }
        return true;
    }
    return (
        <div className="container-sing-up flex center">
            <div className="flex center flex-column inputs">
                <div className="title"><h1>Register</h1></div>
                <input className="input" type="text" name="name" placeholder="Name" value={data.name} onChange={(e) => setValueData('name', e.target.value)} />
                <input className="input" type="text" name="username" placeholder="Email" value={data.email} onChange={(e) => setValueData('email', e.target.value)} />
                <input className="input" type="password" name="password" placeholder="Password" value={data.password} onChange={(e) => setValueData('password', e.target.value)} />
                <input className="input" type="password" name="confirmPassword" placeholder="Confirm password" value={data.confirmPassword} onChange={(e) => setValueData('confirmPassword', e.target.value)} />
                <button className="button" onClick={() => registerClick()}>Register</button>
                <Link to="/Login" className="return-login" >Login</Link>
            </div>
        </div>
    );
}

export default SingUp;
