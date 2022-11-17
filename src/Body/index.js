import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import NewsCardComponent from './NewsCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FromComponent from './Form';
import moment from 'moment';
import './News.scss'
import { getEverything } from '../Services/apiServices';

function NewsGroupComponent(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [formResponse, setFormResponse] = useState(null);

  useEffect(() => {
    (async function(){
      const response = await getEverything(props);
      const responseData = await response.json();
      setFormResponse(responseData);
    })();

  },[props]);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow} className="mb-3">
        Launch
      </Button>
      <Row xs={1} md={2} lg={3} className="g-2">
        {formResponse?.articles.map((article, idx) => (
          <Col key={idx}>
            <NewsCardComponent article={article} />
          </Col>
        ))}
      </Row>
      <FromComponent 
      show = {show} 
      handleClose = {handleClose} 
      setFormResponse = {setFormResponse}
      searchProps = {props}
      />
    </>
  );
}
NewsGroupComponent.defaultProps = {
  q: 'Авто',
  from: moment().format("YYYY-MM-DDT00:00:000"),
  to: moment().format("YYYY-MM-DDT23:59:59.999"),
  language: 'ru',
  searchIn: 'title,description,content',
  pageSize: 12, 
  page: 1,

}
export default NewsGroupComponent;