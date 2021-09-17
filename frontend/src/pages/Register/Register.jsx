import React, { useState } from 'react'
import './Register.css'
import { register } from '../../Service/api';
import {useHistory} from 'react-router-dom';

const initialValue = {
  name: '',
  email: '',
  password: '',
}


const Register = () => {
  const [user, setUser] = useState(initialValue);
  const { name, email, password } = user;
  const history = useHistory();

      const onValueChange = (e) => {
          setUser({...user, [e.target.name]: e.target.value})
      }

  
    const addUserDetails = async(e) => {
      e.preventDefault()
       try {
          const res =  await register(user);
          console.log(res)
           history.push('/login');
       } catch (error) {
         console.log(error)
       }
      }

  return (
    <div className="form_div">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onValueChange}
            className="form-control inputField"
            placeholder="Enter name.." />

        </div>
       
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onValueChange}
            className="form-control inputField"
            placeholder="Enter email" />

        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onValueChange}
            className="form-control inputField"
            placeholder="Password" />
        </div>

        <button
          onClick={addUserDetails}
          type="submit"
          className="btn button btn-primary my-4">Submit</button>
      </form>
    </div>
  )
}

export default Register
