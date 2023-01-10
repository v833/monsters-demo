import React, { Component } from 'react'
import Card from '../card/card.component'
import './card-list.styles.css'

class CardList extends Component {
  state = {}
  render() {
    console.log('render CardList')
    const { monsters } = this.props
    return (
      <div className={'card-list'}>
        {monsters.map((monster) => {
          return <Card monster={monster} key={monster.id}></Card>
        })}
      </div>
    )
  }
}

export default CardList
