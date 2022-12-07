import { NavLink } from "react-router-dom"; //removed useNavigate
import React from 'react'; //removed useCallBack
// import { useStytchSession, useStytch } from '@stytch/stytch-react';


import './Navigation.css';

 const Navigation = () => {

    // const session = useStytchSession();
    // const client = useStytch();
    // const navigate = useNavigate();

    // const handleLogout = useCallback(async () => {
    //     await client.session.revoke();
    //     alert('You are now logged out!');
    //     navigate('/login');
    //   }, [client])

    return ( 
        <nav>
            <div>
                <h1 className="brand">SmileLine</h1>
            </div>
                <NavLink to='/questions' className="navlink">Your Questions</NavLink>
                <NavLink to='/find' className="navlink">Find A Dentist</NavLink>
                <NavLink to='/health' className="navlink">Health History Form</NavLink>
                <NavLink to='/HIPAA' className="navlink">Consent Forms</NavLink>
                <NavLink to='/fees' className="navlink">Dental Fees</NavLink>
                <NavLink to='/contact' className="navlink">Contact SmileLine</NavLink>
                {/* <div> <NavLink to='/login'>Login</NavLink></div> */}
                {/* <div className="button"> <button onClick={handleLogout}>Logout</button> </div> */}
            
        </nav>
    )
};

export default Navigation;