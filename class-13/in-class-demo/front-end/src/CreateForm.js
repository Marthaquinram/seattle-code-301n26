import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class CreateForm extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const newCat = {
            name: event.target.formName.value,
            color: event.target.formColor.value,
            location: event.target.formLocation.value,
            hasClaws: event.target.formClawsCheckbox.checked
        }
        this.props.handleCatCreate(newCat);
    }

    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.hideCreateForm} >
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Create a New Cat!</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit} >
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter your cat's name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formColor">
                                <Form.Label>Color</Form.Label>
                                <Form.Control type="name" placeholder="What color is your cat?" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formLocation">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="name" placeholder="Where does your cat live?" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formClawsCheckbox">
                                <Form.Check type="checkbox" label="Has claws" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.props.hideCreateForm} variant="secondary">Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        )
    }
}

export default CreateForm;