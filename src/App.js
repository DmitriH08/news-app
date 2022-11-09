// API KEY : 2d5debd860354c8fa67d4458c2ad9578
import Container from 'react-bootstrap/Container';
import NewsGroupComponent from './Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './Header';
import PaginationComponent from './Footer';


function App() {
  return (
    <Container>
      <HeaderComponent />
      <NewsGroupComponent />
      <PaginationComponent />
    </Container>
  );
}

export default App;
