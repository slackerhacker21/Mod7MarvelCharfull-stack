import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Toast } from 'react-bootstrap';
import axios from 'axios';
import CharacterForm from '../components/CharacterForm';

function CreateCharacter() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCreate = async (data) => {
    try {
      await axios.post('http://127.0.0.1:5000/characters', data);
      setShowSuccess(true);
      setTimeout(() => navigate('/characters'), 2000);
    } catch (error) {
      alert('Failed to create character');
    }
  };

  return (
    <Container className="mt-4">
      <h2>Create Character</h2>
      <CharacterForm onSubmit={handleCreate} />
      <Toast show={showSuccess} onClose={() => setShowSuccess(false)} delay={2000} autohide>
        <Toast.Header>
          <strong className="me-auto">Success</strong>
        </Toast.Header>
        <Toast.Body>Character created successfully!</Toast.Body>
      </Toast>
    </Container>
  );
}

export default CreateCharacter;
