import { Container, Form, Button } from 'semantic-ui-react';


const Projects = () => {
  return (
    <Container>
      <h1>Projects</h1>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
}

export default Projects;