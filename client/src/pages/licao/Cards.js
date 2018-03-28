import React, { Component } from 'react'
import * as popUp from '../../actions/popups.action'
import PopUp from './PopUp'
import Card from './Card'

class Cards extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentCard: {}
    }
  }

  openCard(el) {
    this.setState({ currentCard: el })
    popUp.open(this.cardPopup.state.id)
  }

  render() {

    return (
      <div className="d-flex flex-wrap justify-content-center">
        {this.props.cards.map((card, i) =>
          <div
            key={i}
            className="card mx-4 my-3 pointer list-group-item-action"
            style={{ width: '320px' }}
            onClick={() => this.openCard(card)}
          >
            <div className="card-header text-center font-weight-bold">
              Card #{card.pos}
            </div>
            <div className="card-body d-flex align-items-center">
              <p className="card-text">{card.text}</p>
            </div>

          </div>
        )}

        <PopUp ref={ref => this.cardPopup = ref}>
          <Card card={this.state.currentCard} />
        </PopUp>
      </div >
    )
  }
}

export default Cards
