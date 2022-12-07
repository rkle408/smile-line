// import React, { useEffect } from 'react';
// import { useStytch, useStytchSession } from '@stytch/stytch-react';
// import { useNavigate } from 'react-router-dom';
// import './style.css'

// const Authenticate = () => {
//   const client = useStytch();
//   const session = useStytchSession();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (session) {
//       navigate('/questions')
//     } else {
//       const token = new URLSearchParams(window.location.search).get('token');

//       client.magicLinks.authenticate(token, {
//         session_duration_minutes: 60
//       }).then(() => {
//         alert('Successfully Authenticated');
//         navigate('/questions')
//       })
//     }
//   },[client, session])

//   return (
//     <div className='authenticating' style={{minHeight: '80vh'}}>
//       <h2>Authenticating in progress... Thank you for waiting</h2>
//       </div>
//   )
// }

// export default Authenticate;