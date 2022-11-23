import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import NewsCardComponent from './NewsCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FromComponent from './Form';
import './News.scss'
import { useDispatch } from 'react-redux';
import { getEverything } from '../Services/apiServices';
import { setErrorMessage,setTotalResults, setSearchParams } from '../Services/stateService';
import { useSelector } from 'react-redux';
import { useParams,Link } from 'react-router-dom';

function NewsGroupComponent() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [articles, setArticles] = useState([]);
  const dispatch = useDispatch();

  const searchParams = useSelector((state) => state.searchParams);
  const {q, lang} = useParams();
  console.log('q',q);

  useEffect(() => {
    if (lang && searchParams.language !== lang){
      dispatch(setSearchParams({   
        ...searchParams,
        language: lang,
      }));
      return;
    }
    (async function () {
      try {
        const response = await getEverything({
          ...searchParams,
          q:q || searchParams.q,
        });
        const responseData = await response.json();
        if (responseData.status === 'error') {
          throw responseData;
        }
        setArticles(responseData.articles);
        dispatch(setTotalResults(responseData.totalResults));
      }
      catch (error) {
        dispatch(setErrorMessage(error.message));
      }

    })();

  }, [searchParams, dispatch,q,lang]);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow} className="mb-3">
        Launch
      </Button>
      <Link to = "/Bitcoin">Bitok Today</Link>
      <Row xs={1} md={2} lg={3} className="g-2">
        {articles.map((article, idx) => (
          <Col key={idx}>
            <NewsCardComponent article={article} />
          </Col>
        ))}
      </Row>
      <FromComponent
        show={show}
        handleClose={handleClose}
        setArticles={setArticles}
        searchProps={searchParams}
      />
    </>
  );
}

export default NewsGroupComponent;