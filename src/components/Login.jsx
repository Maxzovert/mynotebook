import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [credential, setCredential] = useState({ email: "", password: "" });
    let navigate = useNavigate();

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credential.email, password: credential.password }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem("token", json.authtoken);
            props.setIsAuthenticated(true);
            navigate("/"); // navigate to home page
            props.showAlert("Login Successfully", "success")
            

        } else {
            props.showAlert("Invalide credential", "danger")
        }
    };

    return (
        <div className='lg-sn-con'>
              <div className="rtxt">
      <h1 style={{color:'yellow'}}>Login<span style={{color:'white'}}>!!</span> </h1>
         <h1><span>To</span><span style={{color:'yellow'}}>Use</span></h1>
         <h1><span style={{color:'yellow'}}>SnapNotes</span></h1>
         </div>
            <form className='signupform' onSubmit={handleSubmit}>
                <div className="lg-sn-name fi-lab">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        name="email"
                        value={credential.email}
                        onChange={onChange}
                    />
                </div>
                <div className="lg-sn-name fi-lab">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={credential.password}
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className="signup-btn">Login</button>
            </form>
        </div>
    );
};

export default Login;
