import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import CreateForm from './CreateForm';
import UpdateForm from './UpdateForm';

class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedUpdateCat: {},
      showUpdate: false
    }
  }

  displayCreateForm = () => {
    this.setState({
      showModal: true
    })
  }

  hideCreateForm = () => {
    this.setState({
      showModal: false
    })
  }

  handleCatCreate = async (newCatInfo) => {
    const response = await axios.post(`http://localhost:3001/cats`, newCatInfo);
    console.log(response.data);
    this.props.updateCatsArray(response.data);
  }

  handleCatUpdate = async (updatedCatInfo) => {
    await axios.put(`http://localhost:3001/cats/${updatedCatInfo._id}`, updatedCatInfo);

    const updatedCats = this.props.cats.map(preExistingCat => {
      if (preExistingCat._id === updatedCatInfo._id) {
        return updatedCatInfo;
      } else {
        return preExistingCat;
      }
    });

    this.props.updateFilteredCats(updatedCats);
  }

  handleUpdateCat = (cat, event) => {
    console.log("CAT: ", cat);
    console.log("TYPEOF CAT: ", typeof cat);
    this.setState({
      selectedUpdateCat: cat,
    }, console.log("STATE: ", this.state));
  };

  hideUpdateForm = () => {
    this.setState({
      selectedUpdateCat: {},
      showUpdate: false
    });
  }


  render() {
    return (
      <>
        <Button onClick={this.displayCreateForm}>Create a New Cat!</Button>
        <CreateForm
          showModal={this.state.showModal}
          hideCreateForm={this.hideCreateForm}
          handleCatCreate={this.handleCatCreate}
        />
        <UpdateForm
          cat={this.state.selectedUpdateCat}
          hideUpdateForm={this.hideUpdateForm}
          onHide={this.hideUpdateForm}
          show={this.state.showUpdate}
          handleCatUpdate={this.handleCatUpdate}
        />
        {this.props.cats.length && this.props.cats.map(cat => (
          <div key={cat._id}>
            <Cat
              cats={this.props.cats}
              cat={cat}
              handleUpdateCat={this.handleUpdateCat}
              updateFilteredCats={this.props.updateFilteredCats}
            />
          </div>
        ))}
      </>
    )
  }
}

class Cat extends React.Component {

  handleDeleteCat = async (event, catToBeDeleted) => {
    console.log('Cat to be deleted: ', catToBeDeleted);
    const filteredCats = this.props.cats.filter(cat => cat._id !== catToBeDeleted);
    this.props.updateFilteredCats(filteredCats);
    await axios.delete(`http://localhost:3001/cats/${catToBeDeleted}`);
  }


  render() {
    return (
      <>
      { this.props.cat.name } in { this.props.cat.location }
      < Button onClick = { event => this.handleDeleteCat(event, this.props.cat._id) } > Delete this Cat!</Button >
        <Button onClick={event => this.props.handleUpdateCat(this.props.cat, event)} >Update this Cat!</Button>
      </>
    )
  }
}

export default Cats;