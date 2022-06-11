import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SnackForm extends React.Component {
  render() {
    return (
      <Form>
          <Form.Label>Create a Snack</Form.Label>
          <Form.Group controlId="snackName">
            <Form.Control type="text" placeholder="snack name"  />
          </Form.Group>
          <Form.Group controlId="snackDescription">
            <Form.Control type="text" placeholder="snack description" />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
    )
  }
}

export default SnackForm;
