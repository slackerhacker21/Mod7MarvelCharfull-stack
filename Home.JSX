import { Container, Jumbotron } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-4">
      <Jumbotron>
        <h1>Welcome to the Marvel App</h1>
        <p>Explore your favorite Marvel characters!</p>
      </Jumbotron>
    </Container>
  );
}

export default Home;
