import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import noImage from '../dummy-post-horisontal.jpg';

// Kak i ljubaja funktsija v Js takze i komponenti prinemajut props (properties).
// Komponent mozet prinjat beskonechnoe kol-vo properties, no hranit on ih vseh v odnoj peremennoj v kachestve objecta
// Propsi peredajutsa v komponent takze kak html element mi peredaem atributi (id,value,class i t.d). (<Component prop1 = {1} porp2= {2} />)
// V komponente Props ne mogut menjatsa
function NewsModalComponent({ setShow, show, article }) {

  const handleClose = () => setShow(false);
  const handleOpen = () => { 
    window.open(article.url, "_blank");
    handleClose()
  };

  return (
    <div>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{article.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Figure>
            <Figure.Image
              // width={171}
              // height={180}
              alt="171x180"
              src={article.urlToImage || noImage}>
            </Figure.Image>
            <Figure.Caption>
              {article.url}
            </Figure.Caption>
          </Figure>
          <p>{article.content}</p>
        </Modal.Body>
        <Modal.Footer className = "d-flex justify-content-between">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleOpen}>
          {/* <Button variant="primary" href={article.url} target = "_blank"> - kak variant */}
            Read More
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NewsModalComponent;