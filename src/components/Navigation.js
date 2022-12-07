import { NavLink, useNavigate } from "react-router-dom";
import React, { useCallback } from 'react';
import { useStytchSession, useStytch } from '@stytch/stytch-react';


import './Navigation.css';

export default () => {
    const session = useStytchSession();
    const client = useStytch();
    const navigate = useNavigate();

    const handleLogout = useCallback(async () => {
        await client.session.revoke();
        alert('You are now logged out!');
        navigate('/login');
      }, [client])


    return (
        <nav>
            <div>
                <h1 className="brand">SmileLine</h1>
            </div>
            <div className="allnavlinks">
                <div> {session && <NavLink to='/questions' className="navlink">Your Questions</NavLink>} </div>
                <div> {session && <NavLink to='/find' className="navlink">Find A Dentist</NavLink>} </div>
                <div> {session && <NavLink to='/health' className="navlink">Health History Form</NavLink>} </div>
                <div> {session && <NavLink to='/HIPAA' className="navlink">Consent Forms</NavLink>} </div>
                <div> {session && <NavLink to='/fees' className="navlink">Dental Fees</NavLink>} </div>
                <div> {session && <NavLink to='/contact' className="navlink">Contact SmileLine</NavLink>} </div>
                <div> {!session && <NavLink to='/login'>Login</NavLink>} </div>
                <div className="button"> {session && <button onClick={handleLogout}>Logout</button>} </div>
            </div>
        </nav>
    )
};