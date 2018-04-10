import React, { Component } from 'react';

class CardInfo extends Component {
    constructor(props) {
        super(props);
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
            ]
        }
    }
    render() {
        return (
            <div className='cardsInfo'>
                Available cards:
                {this.state.cards.map((card, index) => (
                    <div key={index} onClick={() => console.log('clicked')}>
                        {card.type}
                        <div className='cardInfo'>
                            <p>{card.description}</p>
                            <p>Apr - {card.apr}%</p>
                            <p>Balance Transfer Offer Duration - {card.balancetTOD} months</p>
                            <p>Purchase Offer Duration - {card.purchaseOD} months</p>
                            <p>Credit Available - £{card.creditAvailable}</p>
                        </div>
                    </div>
                ))}

            </div>
        )
    }
}

export default CardInfo;