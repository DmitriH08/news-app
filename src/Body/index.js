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
  // useParams eto hook dlja react-router-dom dlja poluchenija informacii s silki
  // useDispatch eto hook react-redux i blagodarja emu mi mozem vzaimodejstvovat s redux
  // useDispatch eto most mezdu reactom i reduxom
  const [articles, setArticles] = useState([]);
  const dispatch = useDispatch();
  // useSelector eto react-reux hook kotorij sledit za redux sostojaniem i pri nalichii izmenenij zapuskaet otrisovku komponenta
  const searchParams = useSelector((state) => state.searchParams);
  const {q, lang} = useParams();
  console.log('q',q);

  // useEffect eto React hook kotorj zapuskaetsa posle togo kak pervij render/ otrisovka komponenta proisohel
  // useEffect prinimaet 2 parametra
  // 1 : funtsija kotoruju nuzno zapustit 
  // 2 : massiv iz peremennih ot kotorih nudet zavisit dalnejwaja rabota useEffecta
  // vse vnewnie peremennie kotorie mi ispolzuem v funkcii dolzni bit v massive zavisimostej
  // Pri ljubih izmenenij etih zavisimostej useEffect zapuskaetsa
  // Pri izmenenij v komponente ne kassajuwih zavisimosti([searchParams, dispatch,q,lang]) useEffecta ne zapuskajut useEffect, no komponent renderitsa.
  // Poetomu v nem lutwe vsego rabotat s zaprosomi
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
        // redux dejstvie neobhodimo obernut v dispath! 
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
      <Button variant="outline-primary" className="mb-3">
      <Link to = "/Bitcoin" className="Bitok">Bitok Today</Link></Button>
      <Row xs={1} md={2} lg={3} className="g-2">
        {articles.map((article, idx) => (
          <Col key={idx}>
            <NewsCardComponent article={article} />
          </Col>
        ))}
      </Row>
      <FromComponent
        show={show}
        // tak mi peredaem functsiju 
        handleClose={handleClose}
        setArticles={setArticles}
        searchProps={searchParams}
      />
    </>
  );
}

export default NewsGroupComponent;