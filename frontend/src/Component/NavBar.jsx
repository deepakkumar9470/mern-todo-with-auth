import React,{useContext} from 'react'
import { Link, useHistory } from 'react-router-dom';
import logo from '../Assets/Images/mern.png'
import {UserContext} from '../App'

const NavBar = () => {
  const history = useHistory()
  const {state, dispatch} = useContext(UserContext)
  const RenderMenu = () =>{
    if(state){
      return (
                   <>
                          <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                          </li>
                          <li class="nav-item">
                            <Link class="nav-link" to="/add">Add</Link>
                          </li>
                          <li class="nav-item">
                            <Link class="nav-link" to="/logout">Logout</Link>
                          </li>
                      </>
      )
    }else{
        return(
          <>
          <li class="nav-item">
             <Link class="nav-link" to="/login">Login</Link>
            
           </li>
           <li class="nav-item">
             <Link class="nav-link" to="/register">SignUp</Link>
           </li>
     </>
        )
    }
  }
    return (
        <>
            <header class="container-fluid nav_style mx-auto">
         <div class="row">
             <div class="col-md-10 col-11 mx-auto">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                      <a class="navbar-brand" href="/"><img className="logo" src={logo} alt="logo" /></a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                         <RenderMenu/>
                        </ul>
                      </div>
                    </div>
                  </nav>
             </div>
         </div>
         
     </header>
              
        </>
    )
}

export default NavBar;