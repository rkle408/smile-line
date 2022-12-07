import { NavLink } from "react-router-dom"; //removed useNavigate
import React from 'react'; //removed useCallBack
// import { useStytchSession, useStytch } from '@stytch/stytch-react';
import { Navbar, Nav} from 'react-bootstrap';



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
            <Navbar collapseOnSelect expand='lg' className='nav'>
            <div className="brand">
                <a href='/' className="smile"><h1>SmileLine</h1></a>
            </div>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id='responsive-navbar-nav' style={{justifyContent: 'space-around'}}>
                <Nav style={{gap: '20px'}}>
                    <NavLink to='/questions' className="navlink">Your Questions</NavLink>
                    <NavLink to='/terms' className="navlink">Translate: Dental Terms</NavLink>
                    <NavLink to='/find' className="navlink">Find A Dentist</NavLink>
                    <NavLink to='/health' className="navlink">Health History Form</NavLink>
                    <NavLink to='/HIPAA' className="navlink">Consent Forms</NavLink>
                    <NavLink to='/fees' className="navlink">Dental Fees</NavLink>
                    <NavLink to='/contact' className="navlink">Contact SmileLine</NavLink>
                    {/* <div> <NavLink to='/login'>Login</NavLink></div> */}
                    {/* <div className="button"> <button onClick={handleLogout}>Logout</button> </div> */}
                
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};

export default Navigation;