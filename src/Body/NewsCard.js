import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import noImage from '../dummy-post-horisontal.jpg';
import NewsModalComponent from './NewsModal';
import moment from 'moment';
function NewsCardComponent({article}) {
  // useState eto funktsija/hook kotoraja pomogaet rabotat s sostojaniem komponenta
  // Sostojanie eto informacija kotoruju komponent soderzit v sebe
  // Pri izmenenii sostojanija zapuskaetsa novaja otrisovka/render komponenta.
  // U kazdogo sostojanija est svoe iznachalnoe znachenie i funktsija kotoraja menjaet eto znachenie,
  // useState prinimaet kak argument ili props iznachalno znachenie sostojanija i vidaet massiv s dvumja znachenijami
  // 1 : iznachalnoe sostojanie  ( v nashem sluchae - false)
  // 2 : funktciju dlja izmenenija sostojanija 
  const [show, setShow] = useState(false);
  // Card component eto komponent iz npm paket react - bootsrtap,
  //  react - bootsrtap eto bibleoteka s gotovimi react komponentami napisannimi s ispolzovaniem bootstrap css toolkit. 
  return (
    <>

      <Card onClick={() => setShow(true)}>
        <Card.Img variant="top" src={article.urlToImage} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{article.source.name || noImage}</Card.Subtitle>
          <Card.Text className="Text">
            {article.content}
            </Card.Text>
          <Card.Text dangerouslySetInnerHTML = {{ __html:article.description}}></Card.Text>
          {article.author ? (
          <blockquote className="blockquote mb-0">
            <footer className="blockquote-footer">
              <cite title="Author">{article.author}</cite>
            </footer>
          </blockquote>
          ): ''}

        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{moment(article.publishedAt).format('DD.MM.YYYY')}</small>
        </Card.Footer>
      </Card>
      <NewsModalComponent show={show} setShow={setShow} article={article}/>
    </>
  );
}

export default NewsCardComponent;