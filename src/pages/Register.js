import { useState } from "react";
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [rpass, setrPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(pass == rpass){
            if(email&&pass&&name){
                localStorage.setItem("email", email)
                localStorage.setItem("pass", pass)
                localStorage.setItem("name", name)
                localStorage.setItem("signUp", email)
                window.location.href = "/"
            }
        }else{
            alert("Both password have to be the same!!");
        }
    }

    return(
        <div className="all">
            <div className="auth-from-container" >
                <h4>Sign Up</h4>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@gmail.com" id="email" name="email"/>
                    <label htmlFor="name">Username:</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="username"></input>
                    <label htmlFor="email">Enter Password:</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*****************" id="password" name="password"/>
                    <label htmlFor="email">Repeat Password:</label>
                    <input value={rpass} onChange={(e) => setrPass(e.target.value)} type="password" placeholder="*****************" id="rpassword" name="password"/>
                    <button type="submit">Register</button>
                </form>
            </div>
    </div>
    );
}

export default Register;