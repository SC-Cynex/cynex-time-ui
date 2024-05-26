// Register.js

import React from 'react';
import './Register.css'; // Importando o arquivo CSS

function Register() {
    return (
        <div className="admin-container">
            <h1 className="admin-title">Admin</h1>
            <form action="http://localhost:3000/user/register" method="post">
                <div className="input-container">
                    <input type="text" id='name' name='name' placeholder='Name' className="admin-input" />
                </div>
                <div className="input-container">
                    <input type="email" id='email' name='email' placeholder='Email' className="admin-input" />
                </div>
                <div className="input-container">
                    <input type="password" id='password' name='password' placeholder='Password' className="admin-input" />
                </div>
                <button type='submit' className="admin-button">Register</button>
            </form>
        </div>
    );
}

export default Register;
