import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-scroll border-bottom border-light py-3">
            <div className="container">
                <Link className="navbar-brand fw-semibold" to="/" style={{color:"#91B3FA"}}>RENTYOURROOM</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <Link to="/login" class="nav-link fw-normal" >LOGIN</Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link to="/signup" class="btn text-light px-3 fw-semibold" style={{borderRadius:"30px", backgroundColor:"#91B3FA" }}>SIGN UP</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;