import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function School (){
return(
  <div>
    <Card className="text-center">
    <Card.Header>Tallinna Tervishoiu Kõrgkool / Tallin Medical College
    <Card.Img variant="top" src="https://abivahendid.eu/wp-content/uploads/2021/03/therapy-04.jpg" className= "OT" />
    </Card.Header>
    <Card.Body>
      <Card.Title>TTK provides you to choose many medical proffesions, such as: Nurse, Optometrist, Pharmacist, Occupational Therapist, Dental Techinitian and so on.</Card.Title>
      <Card.Text>
        Medical College is located in Tallinn, Kännu 67. You can contact by phone:+372 671 1701 or Email: info@ttk.ee
      </Card.Text>
      <Button variant="primary" a href =" https://www.ttk.ee/et/kontaktileht">More info</Button>
    </Card.Body>
  </Card>

  </div>
);
}

export default School;