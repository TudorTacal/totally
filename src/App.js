import React, { Component } from 'react';
import UserForm from './UserForm';
import CardInfo from './CardInfo';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        displayCards: false,

    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getCardInfo = this.getCardInfo.bind(this);
  }

  getCardInfo(){
    // calculateCardStatus();
    this.setState({cards: 'all', displayCards: true})
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
        <UserForm
          handleInputChange={this.handleInputChange}
          getCardInfo={this.getCardInfo}
          />
        {this.state.displayCards && 
          <CardInfo returnCards={this.state.cards}/>}
      </div>
    );
  }
}

export default App;
