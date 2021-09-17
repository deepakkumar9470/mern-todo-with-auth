import React,{useState,useContext} from 'react'
import './Login.css'
import {login} from '../../Service/api'
import {useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import {logout} from '../../Service/api'
const initialValue = {
  email: '',
  password: '',
}


const Login = () => {
  const {state, dispatch} = useContext(UserContext)
  const [user, setUser] = useState(initialValue);
  const {email, password } = user;
  const history = useHistory();

      const onValueChange = (e) => {
          setUser({...user, [e.target.name]: e.target.value})
      }

  
    const addUserDetails = async(e) => {
      e.preventDefault()
       try {
          const res =  await logout();
          console.log(res)
            dispatch({type : "USER", payload : false})
              window.alert('Logout Successfully')
              history.push('/login');
          
       } catch (error) {
         console.log(error)
        }
    }

  return (
     <div className="form_div">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input 
               type="email" 
               name="email"
               value={email}
               onChange={onValueChange}
               className="form-control inputField" 
               placeholder="Enter email"/>
           
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input 
              type="password" 
              name ="password"
              value={password}
              onChange={onValueChange}
              className="form-control inputField"  
              placeholder="Password"/>
          </div>
         
          <button 
            type="submit" 
            onClick={addUserDetails}
            className="btn button btn-primary my-4">
              Submit
          </button>
        </form>
     </div>
    )
   }

export default Login
