import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function FromComponent({ show, handleClose }) {
    const languages = [
        { label: 'English', code: 'en' },
        { label: 'Russian', code: 'ru' },
        { label: 'Germany', code: 'de' },
        { label: 'Franch', code: 'fr' },
    ];

    function upperText(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    };
  
    return (

        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search News</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label >Keywords</Form.Label>
                        <Form.Control type="email" placeholder="Enter keywords or phrases" />
                        <Form.Text className="text-muted">
                            Advanced search is supported.
                        </Form.Text>
                    </Form.Group>
                    {['title', 'description', 'content'].map((titleName) => (
                        <div key={`${titleName}`} className="mb-3">
                            <Form.Check
                                label={upperText(titleName)}
                                name="searchIn"
                                type="checkbox"
                                id={`inline-${titleName}-1`}
                            />
                        </div>
                    ))}
                    <Form.Group className="mb-3">
                        <Form.Label>From-to</Form.Label>
                        <InputGroup className="mb-3">

                            <InputGroup.Text></InputGroup.Text>
                            <Form.Control aria-label="from" />
                            <Form.Control aria-label="to" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Select Language</Form.Label>
                        <Form.Select>
                            {languages.map((lang) => (
                                <option>{lang.label}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Search
                    </Button>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
         
                            );
}
export default FromComponent;