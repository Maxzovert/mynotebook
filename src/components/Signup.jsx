import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/loginsignup.css'


const Signup = (props) => {

  const [credential, setCredential] = useState({ name:"",email: "", password: "",cpassword:"" });

let navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email,password,cpassword} = credential 
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name,email,password }),
    });


    const json = await response.json();
    console.log(json);
    if(json.success){
      localStorage.setItem("token", json.authtoken);
      navigate("/"); // navigate to home page
      props.showAlert("Account created","success")
    }else{
      props.showAlert("Invalide credential","danger")
    }

};
const onChange = (e) => {
  setCredential({ ...credential, [e.target.name]: e.target.value });
};
  return (
    <>
    <div  className='lg-sn-con'>
      <div className="rtxt">
      <h1 style={{color:'yellow'}}>Sign<span style={{color:'white'}}>Up</span> </h1>
         <h1><span>To</span><span style={{color:'yellow'}}>Use</span></h1>
         </div>
      <form className='signupform' onSubmit={handleSubmit}>
  <div className="lg-sn-name fi-lab">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" onChange={onChange} aria-describedby="emailHelp" name="name"/>
  </div>
  <div className="lg-sn-name fi-lab">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"  id="email" onChange={onChange} aria-describedby="emailHelp" name='email'/>
  </div>
  <div className="lg-sn-name fi-lab">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" onChange={onChange} name='password' minLength={5} required />
  </div>
  <div className="lg-sn-name fi-lab">
    <label htmlFor="cpassword" className="form-label">Password</label>
    <input type="password" className="form-control" id="cpassword" onChange={onChange} name='cpassword' minLength={5} required/>
  </div>
  <button type="submit" className="signup-btn">SignUp</button>
</form>
    </div>
    </>
  )
}

export default Signup
