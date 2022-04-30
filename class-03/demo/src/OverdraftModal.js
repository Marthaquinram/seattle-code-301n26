import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class OverdraftModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Overdraft Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is the LAST TIME BILLY!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default OverdraftModal;