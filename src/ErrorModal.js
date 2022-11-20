import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { setErrorMessage } from './Services/stateService';
function ErrorModalComponent() {

const errorMessage = useSelector((state) => state.errorMessage);
const dispatch = useDispatch();
function handleClose(){
        dispatch(setErrorMessage(null));
}

    return (
        <Modal show={!!errorMessage} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>{errorMessage}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ErrorModalComponent;