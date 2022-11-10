import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import noImage from '../dummy-post-horisontal.jpg';
function NewsModalComponent(props) {
  const handleClose = () => props.setShow(false);
  

  return (
    <>
    
      <Modal size = "lg" show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <Figure>
        <Figure.Image
            // width={171}
            // height={180}
            alt="171x180"
            src={noImage}
        />
        <Figure.Caption>
            Url
        </Figure.Caption>
    </Figure>
    <p>Content</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewsModalComponent;