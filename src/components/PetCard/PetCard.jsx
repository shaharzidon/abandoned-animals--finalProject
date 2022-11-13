import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PetModal from '../PetModal/PetModal';

function PetCard() {
    return (
        <Card style={{ width: '28rem' }}>
            <Card.Img variant="top" src='https://mdbootstrap.com/img/new/standard/nature/184.webp' />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <PetModal></PetModal>
            </Card.Body>
        </Card>
    );
}

export default PetCard;