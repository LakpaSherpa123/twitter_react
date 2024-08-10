import React from 'react'
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';


export default function Navbar() {
  const location = useLocation();
  return (
    <div style={{ width: '100vw', height: '25px' }}>

        <nav className="navbar navbar-expand-lg navbar-dark  bg-primary">
            <div className='container-fluid'>
            <Link to="/"> <a className="navbar-brand" href="#">Twitter Alert</a></Link>
            
          
            <Link to="/AuthConfig"> <button className="btn btn-outline-light" style={{display: location.pathname === '/AuthConfig' ? 'none' : 'block', margin: "0"}}>Configure Twitter API</button></Link>

            </div>
        </nav>
      


    </div>
  )
}
