
import './App.css';
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// import { Magic } from 'magic-sdk';
// const m = new Magic('pk_live_3BD626DA67C0D80C');
// await magic.auth.loginWithMagicLink({ email: 'your.email@example.com' });

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

function App() {

  const [pages] = useState([
    {
      name: "Your Questions"
    },
    {
      name: "Find A Dentist"
    },
    {
      name: "Health History Form"
    },
    // {
    //   name: "Resources"
    // },
    {
      name: "Consent Forms"
    },
    {
      name: "Fees"
    },
    {
      name: "Contact Smile Line"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (<>
    {/* <ApolloProvider client={client}>
      <Router>
      <View>  */}
      {/* Remember to render the `Relayer` component into your app! */}
        {/* <m.Relayer /> */}
        <div >
          <Header pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
          <main className='m-5'>
              <Page currentPage={currentPage}></Page>
          </main>
          <Footer />
        </div>
        </> 
        // {/* </View> */}
      // {/* </Router> */}
    // {/* </ApolloProvider> */}
  );
}

export default App;
