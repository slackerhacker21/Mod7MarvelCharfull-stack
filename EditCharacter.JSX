import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Spinner, Alert, Toast } from 'react-bootstrap';
import axios from 'axios';
import CharacterForm from '../components/CharacterForm';

function EditCharacter() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

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

  const handleUpdate = async (data) => {
    try {
      await axios.put(`http://127.0.0.1:5000/characters/${id}`, data);
      setShowSuccess(true);
      setTimeout(() => navigate('/characters'), 2000);
    } catch (error) {
      setError('Failed to update character');
    }
  };

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="mt-4">
      <h2>Edit Character</h2>
      <CharacterForm initialData={character} onSubmit={handleUpdate} />
      <Toast show={showSuccess} onClose={() => setShowSuccess(false)} delay={2000} autohide>
        <Toast.Header>
          <strong className="me-auto">Success</strong>
        </Toast.Header>
        <Toast.Body>Character updated successfully!</Toast.Body>
      </Toast>
    </Container>
  );
}

export default EditCharacter;
