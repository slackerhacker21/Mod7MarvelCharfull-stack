import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function CharacterForm({ initialData = {}, onSubmit }) {
  const [formData, setFormData] = useState(initialData);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      onSubmit(formData);
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="name" className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide a name.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="alias" className="mb-3">
        <Form.Label>Alias</Form.Label>
        <Form.Control
          type="text"
          name="alias"
          value={formData.alias || ''}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="description" className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={formData.description || ''}
          onChange={handleChange}
        />
      </Form.Group>
      <Button type="submit" variant="primary">Submit</Button>
    </Form>
  );
}

export default CharacterForm;
