import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class UpdateForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            _id: this.props.cat?._id,
            name: this.props.cat?.name,
            color: this.props.cat?.color,
            location: this.props.cat?.location,
            hasClaws: this.props.cat?.hasClaws
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("this.state: ", this.state)
        this.props.handleCatUpdate(this.state);
    }

    handleNameChange = event => this.setState({name: event.target.value});
    handleColorChange = event => this.setState({color: event.target.value});
    handleLocationChange = event => this.setState({location: event.target.value});
    handleClawChange = event => this.setState({hasClaws: event.target.value});

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide} >
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Update a Cat!</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit} >
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    type="name" 
                                    placeholder={this.state.name}
                                    onChange={this.handleNameChange}
                                    // TODO: grab the name of the cat that was clicked on to be updated from state and put in value
                                    value={this.state.name}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formColor">
                                <Form.Label>Color</Form.Label>
                                <Form.Control 
                                    type="name" 
                                    placeholder={this.state.color} 
                                    onChange={this.handleColorChange}
                                    value={this.state.color}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formLocation">
                                <Form.Label>Location</Form.Label>
                                <Form.Control 
                                    type="name" 
                                    placeholder={this.state.location} 
                                    onChange={this.handleLocationChange}
                                    value={this.state.location}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formClawsCheckbox">
                                <Form.Check 
                                    type="checkbox" 
                                    label="Has claws" 
                                    onChange={this.handleClawChange}
                                    checked={this.state.hasClaws}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.props.onHide} variant="secondary">Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        )
    }
}

export default UpdateForm;