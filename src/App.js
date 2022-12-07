import './App.css';
import React from "react";
import { Routes, Route} from 'react-router-dom';
// import Header from "./components/Header";
// import Page from "./components/Page";
import Footer from "./components/Footer";
import Navigation from './components/Navigation';
import Authenticate from './pages/Authenticate';
import Fees from './pages/Fees'
import Contact from './pages/Contact';
import Health from './pages/Health';
import HIPAA from './pages/HIPAA';
import Login from './pages/Login';
import Questions from './pages/Questions';
import Find from './pages/Find';
// import Resources from './pages/Resources';
import CheckEmail from './pages/CheckEmail';
import PrivateRoute from './components/PrivateRoute';
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

        <Routes>
          <Route index path='/find' element={
            <PrivateRoute>
            <Find />
          </PrivateRoute>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          } />
          <Route path='/fees' element={
            <PrivateRoute>
              <Fees />
            </PrivateRoute>
          } />
          <Route path='/health' element={
            <PrivateRoute>
              <Health />
            </PrivateRoute>
          } />
          <Route path='/HIPAA' element={
            <PrivateRoute>
              <HIPAA />
            </PrivateRoute>
          } />
          <Route path='/questions' element={
            <PrivateRoute>
              <Questions />
            </PrivateRoute>
          } />
          {/* <Route path='/resources' element={
            <PrivateRoute>
              <Resources />
            </PrivateRoute>
          } /> */}
          <Route path='/authenticate' element={<Authenticate />} />
          <Route path='/checkemail' element={<CheckEmail />} />

          <Route path='*' element={<Login/>} />
        </Routes>
        <Footer />
        </> 
        
  );
}

export default App;
