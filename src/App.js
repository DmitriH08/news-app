// API KEY : 2d5debd860354c8fa67d4458c2ad9578
// API KEY at home : 38fb7c09c1fb4382ab54dbc123733022
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGroupComponent from './Body';
import HeaderComponent from './Header';
import PaginationComponent from './Footer';
import ErrorModalComponent from './ErrorModal';
import ContactComponent from './Body/Contact';
import {Routes, Route} from 'react-router-dom';
import School from './Body/School';

//Komponenti v React eto obichnie Js functsii kotorie vozvrawajut JSX / React element;

function App() {
  // JSX eto novij sintex ot React kotorij sovmewaet s soboj Js i HTML v udobnom vide.
  // JSX/ React element imeet pravilo: vozvrashaetsa tolko 1 element ili komponent. Odin glavnij i beskonechnoe kol-vo vtorostepennih komponentov.
  // V JSX atribut class pereimenovann v className

  // react-router-dom eto bibleoteka kotoraja pomogaet nam rabotat s silkami
  // kazdij komponent Route otvechaet za kakujunibud ssilku 
  // v Route mi peredaem te komponenti kotorie mi hotim videt po, dannoj v path propertie ssilke
  // Mi mozem peredovat dannie s silki komponentam
  // ':' osznachaet chto mi vozmem vse chto napisanno posle / i peredadim v peremennuju kotoruju naznachali posle ':'
  // V nawem sluchae http://localhost:3000/privet budet oznachat chto mi pokazivaem newsGroup i Pagination komponenti i peredaem im peremennuju  q so znacheniem 'privet'
  
  return (
    <Container>
      <HeaderComponent />
      <Routes>
        <Route path = "/" element = {
        <>
        <NewsGroupComponent />
        <PaginationComponent />
        <School />
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
