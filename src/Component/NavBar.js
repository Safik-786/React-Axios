import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavLink} from 'react-router-dom'
function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-primary bg-danger ">
                <h2 className="navbar-brand fs-4 px-4" href="#">Logo</h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link  text-white" to="/">Home <span className="sr-only"></span></NavLink>
                        <NavLink className="nav-item nav-link text-white" to="/get">GetAxios</NavLink>
                        <NavLink className="nav-item nav-link text-white" to="/post">PostAxios</NavLink>
                        <NavLink className="nav-item nav-link text-white" to="/read">Read</NavLink>
                        <NavLink className="nav-item nav-link text-white" to="/create">Insert</NavLink>
                        <NavLink className="nav-item nav-link text-white" to="/edit">Update</NavLink>
                        
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar
