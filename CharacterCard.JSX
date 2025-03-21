import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CharacterCard({ character, onDelete }) {
  return (
    <Col md={4} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text>{character.description}</Card.Text>
          <Button as={Link} to={`/characters/${character.id}`} variant="primary" className="me-2">
            View
          </Button>
          <Button as={Link} to={`/edit/${character.id}`} variant="warning" className="me-2">
            Edit
          </Button>
          <Button variant="danger" onClick={onDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CharacterCard;
