import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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
    <div  className='container'>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" onChange={onChange} aria-describedby="emailHelp" name="name"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" onChange={onChange} aria-describedby="emailHelp" name='email'/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" onChange={onChange} name='password' minLength={5} required />
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Password</label>
    <input type="password" className="form-control" id="cpassword" onChange={onChange} name='cpassword' minLength={5} required/>
  </div>
  <button type="submit" className="btn btn-primary">SignUp</button>
</form>
    </div>
  )
}

export default Signup
