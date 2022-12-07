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
        <div>
            <div className="brand">
                <h1 className="brand">SmileLine</h1>
            </div>
            <nav style={{display: "flex", flexWrap: "wrap", gap: "50px"}}>
            
            
                <NavLink to='/questions' className="navlink" style={{color:"#6247aa"}}>Your Questions</NavLink>
                <NavLink to='/terms' className="navlink" style={{color:"#6247aa"}}>Translate: Dental Terms</NavLink>
                <NavLink to='/find' className="navlink" style={{color:"#6247aa"}}>Find A Dentist</NavLink>
                <NavLink to='/health' className="navlink" style={{color:"#6247aa"}}>Health History Form</NavLink>
                <NavLink to='/HIPAA' className="navlink" style={{color:"#6247aa"}}>Consent Forms</NavLink>
                <NavLink to='/fees' className="navlink" style={{color:"#6247aa"}}>Dental Fees</NavLink>
                <NavLink to='/contact' className="navlink" style={{color:"#6247aa"}}>Contact SmileLine</NavLink>
                {/* <div> <NavLink to='/login'>Login</NavLink></div> */}
                {/* <div className="button"> <button onClick={handleLogout}>Logout</button> </div> */}
            
            </nav>
        </div>
    )
};

export default Navigation;