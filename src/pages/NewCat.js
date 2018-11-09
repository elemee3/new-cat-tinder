import React, { Component } from 'react';
import '../App.css';
import { FormControl } from 'react-bootstrap';

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

  render() {
    return (
      <div className="App">
        <FormControl
          type="text"
          name="name"
          placeholder="Enter Name Here"
          onChange={this.handleChange.bind(this)}
          value={this.state.form.name}
        /><br/>
        <FormControl name="Age" type="text" placeholder="Enter Age Here" onChange={this.handleChange.bind(this)}
        value={this.state.form.age}/><br/>
        <FormControl name="enjoys" type="text" placeholder="Enter Activities Here" onChange={this.handleChange.bind(this)}
        value={this.state.form.enjoys}/><br/>
        <FormControl type="submit" value="Add New Cat" />
      </div>
    );
  }
}

export default NewCat;
