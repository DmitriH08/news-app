import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ContactComponent() {
// const {School} = useParams();
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/85/81/7e/85817e272970610959845868e22e4d61.jpg" />
                <Card.Body>
                    <Card.Title>About me...</Card.Title>
                    <Card.Text>
                        I`m an occupational therapist, who chenged himself career to become a limbs-prosthetic master and after that I`m still changing it trying to become a webdeveloper. I hope it will be my third and last proffesion. 
                    </Card.Text>
                    <Button variant="outline-primary" className="mb-3" >
                    <Link to = "/contact/School" className="School-link" href ="/School" >School Contact</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
}


export default ContactComponent;