// import { gql } from '@apollo/client';

// // will generate these via graphQL sandbox


// // I changed email TO username in the "mutation" and "login" lines... but user is ID'd by _id and username?
// export const LOGIN_USER = gql`
// mutation loginUser($username: String!, $password: String!) {
//   login(username: $username, password: $password) {
//     token
//     user {
//       _id
//       username
//     }
//   }
// }
// `; 

// export const ADD_USER = gql`
//   mutation AddUser($username: String!, $email: String!, $password: String!) {
//     addUser(username: $username, email: $email, password: $password) {
//       token
//       user {
//         email
//         username
//         password
//         health
//       }
//     }
//   }
// `;

// // export const //NAME_OF_CRUD = gql`
// // 
// // `;