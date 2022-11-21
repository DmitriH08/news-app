// API KEY : 2d5debd860354c8fa67d4458c2ad9578
// API KEY at home : 38fb7c09c1fb4382ab54dbc123733022
// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGroupComponent from './Body';
import HeaderComponent from './Header';
import PaginationComponent from './Footer';
import moment from 'moment';
import ErrorModalComponent from './ErrorModal';



function App(props) {
  return (
    <Container>
      <HeaderComponent />
      <NewsGroupComponent {...props}/>
      <PaginationComponent />
      <ErrorModalComponent /> 
    </Container>
  );
}
// App.defaultProps = {
//   q: 'Sport',
//   from: moment().format("YYYY-MM-DDT00:00:000"),
//   to: moment().format("YYYY-MM-DDT23:59:59.999"),
//   language: 'ru',
//   searchIn: 'title,description,content',
//   pageSize: 12, 
//   page: 1,

// }

export default App;
