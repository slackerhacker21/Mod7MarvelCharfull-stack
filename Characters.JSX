import { useState, useEffect } from 'react';
import { Container, Row, Spinner, Alert, Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [characterToDelete, setCharacterToDelete] = useState(null);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/characters');
      setCharacters(response.data);
    } catch (err) {
      setError('Failed to load characters');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (character) => {
    setCharacterToDelete(character);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:5000/characters/${characterToDelete.id}`);
      setCharacters(characters.filter((c) => c.id !== characterToDelete.id));
      setShowModal(false);
    } catch (error) {
      setError('Failed to delete character');
    }
  };

  return (
    <Container className="mt-4">
      <h2>Characters</h2>
      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading && !error && (
        <Row>
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onDelete={() => handleDeleteClick(character)}
            />
          ))}
        </Row>
      )}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete {characterToDelete?.name}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Characters;
