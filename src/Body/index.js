import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import NewsCardComponent from './NewsCard';
import './News.scss'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FromComponent from './form';
function NewsGroupComponent() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow} className="mb-3">
        Launch
      </Button>
      <Row xs={1} md={2} lg={3} className="g-2">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col key={idx}>
            <NewsCardComponent />
          </Col>
        ))}
      </Row>
      <FromComponent show={show} handleClose={handleClose} />
    </>
  );
}

export default NewsGroupComponent;