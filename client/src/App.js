import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

function App() {

  const [pages] = useState([
    {
      name: "Contact"
    },
    {
      name: "Fees"
    },
    {
      name: "Health"
    },
    {
      name: "HIPAA"
    },
    {
      name: "Questions"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    // <ApolloProvider client={client}>
      // <Router>
      <View>
      {/* Remember to render the `Relayer` component into your app! */}
        <m.Relayer />
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Header pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
          <main>
              <Page currentPage={currentPage}></Page>
          </main>
          <Footer />
        </div>
        </View>
      // </Router>
    // </ApolloProvider>
  );
}

export default App;
