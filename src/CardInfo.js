import React, { Component } from 'react';

class CardInfo extends Component {
    constructor(props) {
        super(props);
        this.showCardInfo = this.showCardInfo.bind(this);
        this.state = {
            cards: [
                { 
                    type: 'Student Life Card',
                    description: `The Student Life credit card is only available to customers with an employment
                                    status of Student.`,
                    apr: 18.9,
                    balancetTOD: 0,
                    purchaseOD: 6,
                    creditAvailable: 1200
                },
                {
                    type: 'Anywhere Card',
                    description: `The anywhere card is available to anyone anywhere.`,
                    apr: 33.9,
                    balancetTOD: 0,
                    purchaseOD: 0,
                    creditAvailable: 300
                },
                {
                    type: 'Liquid Card',
                    description: `The Liquid card is a card available to customers who have an income of more than
                                    £16000.`,
                    apr: 33.9,
                    balancetTOD: 12,
                    purchaseOD: 6,
                    creditAvailable: 3000
                },
            ],
            show: {
                'Student Life Card': 'none',
                'Anywhere Card': 'none',
                'Liquid Card': 'none'
            }
        }
    }

    showCardInfo(cardType) {
        let keyName = Object.keys(this.state.show).filter(key => key == cardType);
        let showValue = this.state.show[cardType];
         showValue == 'none' ?
             this.setState({show: {...this.state.show, [keyName]: 'initial'}}) :
             this.setState({show: {...this.state.show, [keyName]: 'none'}})
    }
    
    render() {
        let totalCredit = this.state.cards.filter(card => this.props.eligibleCards.includes(card.type))
        totalCredit = totalCredit.reduce((acc, value) => {return acc+value.creditAvailable}, 0);
        return (
            <div className='cardsInfo'>
                Available cards:
                {this.state.cards.filter(card => this.props.eligibleCards.includes(card.type)).map((card, index) => (
                    <div className='cardInfo' key={index} onClick={() => this.showCardInfo(card.type)}>
                        {card.type}
                        <div className='cardInfo' style={{display: this.state.show[card.type]}}>
                            <p>{card.description}</p>
                            <p>Apr - {card.apr}%</p>
                            <p>Balance Transfer Offer Duration - {card.balancetTOD} months</p>
                            <p>Purchase Offer Duration - {card.purchaseOD} months</p>
                            <p>Credit Available - £{card.creditAvailable}</p>
                        </div>
                    </div>
                ))}
                <p>Total credit available: {totalCredit}</p>
            </div>
        )
    }
}

export default CardInfo;