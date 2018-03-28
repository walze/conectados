import React, { Component } from 'react'

class Card extends Component {

  render() {

    return (
      <div >
        <h4 className='text-center mb-2'>
          <b>
            Card #{this.props.card.id}
          </b>
        </h4>

        <textarea value={this.props.card.text} rows='4' className='form-control'></textarea>

        <div className='mt-4'>
          <b>Tocar de Posição</b>

          <div className='form-group'>
            <input type='number' className='form-control' placeholder='Digite o número do card que deseja trocar de posição com esse' />

            <div className="d-flex justify-content-between p-1">
              <button className='btn btn-primary'>Salvar</button>
              <button className='btn btn-danger'>Deletar</button>
            </div>
          </div>

        </div>
      </div >
    )
  }
}

export default Card
