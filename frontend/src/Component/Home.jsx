import React,{useState,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../App'

const Home = () => {

    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()
    return (
        <div className="home">
            if (!state){
                  <>

                 <h2>Welcome to MERN App with Authentication!</h2>
                <span><Link to="/login" className="nav-link">Login to access..</Link></span>
                  </>
            }else{
                history.push('/')
            }
                
        </div>
    )
}

export default Home
