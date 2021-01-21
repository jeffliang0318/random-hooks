// import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Nav () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className='container-md'>
                <Link className="navbar-brand" to="/">Brand</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/random-user">Random User</Link>
                        <Link className="nav-item nav-link" to="/ref">Ref.current</Link>
                        <Link className="nav-item nav-link" to="/star">Star</Link>
                        <Link className="nav-item nav-link disabled" to="/">Disabled</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}