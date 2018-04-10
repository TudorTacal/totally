import React, { Component } from 'react';
import UserForm from './UserForm';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
        [name]: value
      });
  }
  render() {
    return (
      <div className="App">
        <UserForm handleInputChange={this.handleInputChange}/>
      </div>
    );
  }
}

export default App;
