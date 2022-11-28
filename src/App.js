// API KEY : 2d5debd860354c8fa67d4458c2ad9578
// API KEY at home : 38fb7c09c1fb4382ab54dbc123733022
// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGroupComponent from './Body';
import HeaderComponent from './Header';
import PaginationComponent from './Footer';
import ErrorModalComponent from './ErrorModal';
import ContactComponent from './Body/Contact';
import {Routes, Route} from 'react-router-dom';
import School from './Body/School';


function App() {
  return (
    <Container>
      <HeaderComponent />
      <Routes>
        <Route path = "/" element = {
        <>
        <NewsGroupComponent />
        <PaginationComponent />
      
        </>
      }/>
              <Route path = "/:q" element = {
        <>
        <NewsGroupComponent />
        <PaginationComponent />
        </>
      }/>
              <Route path = "/lang/:lang" element = {
        <>
        <NewsGroupComponent />
        <PaginationComponent />
        </>
      }/>
               <Route path = "/contact/School" element = {
        <>
       
        <School />
       
        </>
      }/>

        <Route path = "/contact" element = {<ContactComponent />}/>
      </Routes>
      

      <ErrorModalComponent /> 
    </Container>
  );
}


export default App;
