import React, { Component } from 'react';
import UserForm from './UserForm';
import CardInfo from './CardInfo';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        displayCards: false,
        eligibleCards: ['Anywhere Card']

    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getCardInfo = this.getCardInfo.bind(this);
    this.calculateCardStatus = this.calculateCardStatus.bind(this);
  }

  getCardInfo(){
    this.calculateCardStatus();
    console.log(console.log(this.state.eligibleCards));
    this.setState({displayCards: true})
  }

  calculateCardStatus() {
    let eligibleCards = [];
    console.log('calculating');
    if(this.state.employmentStatus == 'Student' &&  parseInt(this.state.annualIncome, 10) > 16000) {
      eligibleCards.push('Liquid Card');
      eligibleCards.push('Student Life Card');
    } else if(parseInt(this.state.annualIncome, 10) > 16000){
      eligibleCards.push('Liquid Card');
    } else if(this.state.employmentStatus == 'Student') {
      eligibleCards.push('Student Life Card');
    }
    console.log(eligibleCards);
    this.setState({eligibleCards: [...this.state.eligibleCards, ...eligibleCards]})
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
          <CardInfo returnCards={this.state.cards} eligibleCards={this.state.eligibleCards}/>}
      </div>
    );
  }
}

export default App;
