import './Login.css';
import {React, useState} from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email == localStorage.getItem("email") && pass == localStorage.getItem("pass")){
            window.location.href = "/"
        }else{
            alert("Incorrect email or password!!")
        }
        
    }

    return(
        <div className='all'>
            <div className="auth-from-container" >
                <h4>Log in</h4>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@gmail.com" id="email" name="email"/>
                    <label htmlFor="email">Password:</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*****************" id="password" name="password"/>
                    <button type="submit">Accept</button>
                </form>
            </div>
        </div>
        
    );
}

export default Login;