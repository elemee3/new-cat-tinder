import React, { Component } from 'react';
import '../App.css';

class NewCat extends Component {
  constructor(props){
  super(props)
  this.state = {
    form:{
      name: '',
      age: '',
      enjoys: ''
      }
    }
  }

  handleChange(event){
    let {form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }

  handleSubmit(event){
    event.preventDefault()
    this.handleNewCat(event)
  }

  handleNewCat(newCat){

  }

  render() {
    return (
      <div className="App">
        <form className="New-Cat-Form">
          Name: <input name="name" type="text" placeholder="Enter Name Here" onChange={this.handleChange.bind(this)} value={this.state.form.name} /><br />
          Age: <input name="age" type="number" placeholder="Enter Age Here" onChange={this.handleChange.bind(this)} value={this.state.form.age} /><br />
          Enjoys: <input name="enjoys" type="text" placeholder="Enter Activities Here" onChange={this.handleChange.bind(this)} value={this.state.form.enjoys} /><br />
          <input type="submit" value="Add New Cat" onClick={this.handleSubmit.bind(this)} /><br />
        </form>
      </div>
    );
  }
}

export default NewCat;
