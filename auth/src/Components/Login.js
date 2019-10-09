import React from 'react';

function Login(props) {

    let login = () =>{
        props.login(document.querySelector("#username").value, document.querySelector("#password").value);
    }

    return (
        <div className="Login">
            <input id="username" type="text"></input>
            <input id="password" type="password"></input>
            <button onClick={login}>submit</button>
        </div>
    );
}

export default Login;
