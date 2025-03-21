import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/characters/${id}`);
        setCharacter(response.data);
      } catch (err) {
        setError('Failed to load character');
      } finally {
        setLoading(false);
      }
    };
    fetchCharacter();
  }, [id]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="mt-4">
      <h2>{character.name}</h2>
      <p><strong>Alias:</strong> {character.alias}</p>
      <p><strong>Description:</strong> {character.description}</p>
      <p><strong>Powers:</strong> {character.powers}</p>
      {/* Adjust fields based on actual database schema */}
    </Container>
  );
}

export default CharacterDetails;
