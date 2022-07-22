import React from 'react'
import "./Navbar.css"
import {useState} from 'react';

const Register = () => {
    const [message, setMessage] = useState({});
    const [users,setUsers]=useState([])
    const handleChange = event => {
        setMessage(event.target.value);
    
        console.log('value is:', event.target.value);
      };
      console.log(users)
    
  return (
    <>
    <form className='register'>
    <div>Register here</div>

        <input placeholder='User Name' type="text" id='name' name='name' onChange={handleChange}
       ></input>
        <br/>
        <br/>
        <input placeholder='Mobile Number' type="number" id='mono' name='mono' onChange={handleChange}
      ></input>
        <br/>
        <br/>
        <input placeholder='Set Password' type="password" id='password' name='password' onChange={handleChange}
       ></input>
        <br/>  <br/>
        <button onClick={()=>{setUsers(message)}}>Register</button>
        
       


  





    </form>
    </>
  )
}

export default Register