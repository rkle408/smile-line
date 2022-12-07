import './App.css';
import React from "react";
import { Routes, Route} from 'react-router-dom';
// import Header from "./components/Header";
// import Page from "./components/Page";
import Footer from "./components/Footer";
import Navigation from './components/Navigation';
// import Authenticate from './pages/Authenticate';
import Fees from './pages/Fees'
import Contact from './pages/Contact';
import Health from './pages/Health';
import HIPAA from './pages/HIPAA';
// import Login from './pages/Login';
import Questions from './pages/Questions';
import Find from './pages/Find';
// import Resources from './pages/Resources';
// import CheckEmail from './pages/CheckEmail';
// import PrivateRoute from './components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  // const [pages] = useState([
  //   {
  //     name: "Your Questions"
  //   },
  //   {
  //     name: "Find A Dentist"
  //   },
  //   {
  //     name: "Health History Form"
  //   },
  //   // {
  //   //   name: "Resources"
  //   // },
  //   {
  //     name: "Consent Forms"
  //   },
  //   {
  //     name: "Fees"
  //   },
  //   {
  //     name: "Contact Smile Line"
  //   }
  // ]);

  // const [currentPage, setCurrentPage] = useState(pages[0]);

  return (<>
    
        {/* <div >
          <Header pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
          <main className='pageContainer'>
            <div className='m-5 contentWrap'>
              <Page currentPage={currentPage}></Page>
            </div>
            <Footer className='footer'/>
          </main>
        </div> */}
  
        <Navigation />

        {/* Deleted PrivateRoute from elements in route  */}
        <Routes> 
          <Route index path='/find' element={<Find />} />
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/fees' element={<Fees />} />
          <Route path='/health' element={<Health />} />
          <Route path='/HIPAA' element={<HIPAA />} />
          <Route path='/questions' element={<Questions />} />
          {/* <Route path='/resources' element={
            <PrivateRoute>
              <Resources />
            </PrivateRoute>
          } /> */}
          {/* <Route path='/authenticate' element={<Authenticate />} /> */}
          {/* <Route path='/checkemail' element={<CheckEmail />} /> */}

          <Route path='*' element={<Questions />} />
        </Routes>
        <Footer />
        </> 
        
  );
}

export default App;
