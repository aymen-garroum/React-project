import { Col, Row, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';

function formulaire(){
return(
<div className="App">

<Form>

  <Form.Group>
    <Form.Label>Name</Form.Label>
    <Form.Control placeholder="Nom" />
  </Form.Group>

  <Form.Group>
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Adresse" />
  </Form.Group>

  <Form.Group >
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Adresse" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col}>
      <Form.Label>Ville</Form.Label>
      <Form.Control placeholder="Ville"/>
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>Code postal</Form.Label>
      <Form.Control placeholder="Code postal"/>
    </Form.Group>

    <Form.Group as={Col}>
        <Form.Label>Pays</Form.Label>
        <Form.Control as="select" defaultValue="Tunisie">
        <option>Tunisie</option>
        <option>France</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>

  <Form.Row>
      <Form.Group as={Col}>
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Email"/>
      </Form.Group>

      <Form.Group as={Col}>
      <Form.Label>Mot de passe</Form.Label>
      <Form.Control type="password" placeholder="Mot de passe"/>
      </Form.Group>
  </Form.Row>

  <Button variant="primary" type="submit">
    S'inscrire
  </Button>
</Form>

</div>
)
}

export default formulaire
