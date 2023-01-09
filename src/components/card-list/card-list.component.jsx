import React, { Component } from 'react'

class CardList extends Component {
  state = {}
  render() {
    console.log('render CardList')
    const { monsters } = this.props
    return (
      <div>
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    )
  }
}

export default CardList
