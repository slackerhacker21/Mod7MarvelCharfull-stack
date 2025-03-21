import { Container, Alert } from 'react-bootstrap';

function NotFound() {
  return (
    <Container className="mt-4">
      <Alert variant="warning">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you’re looking for doesn’t exist.</p>
      </Alert>
    </Container>
  );
}

export default NotFound;
