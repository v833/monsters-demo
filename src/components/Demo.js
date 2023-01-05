import React, { Component } from 'react'

class Demo extends Component {
  constructor() {
    super()
    this.state = {
      monsters: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => ({ monsters: users }),
          () => {
            console.log('this.state: ', this.state)
          }
        )
      })
  }
  render() {
    return (
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {this.state.monsters.map((item) => {
          return <h1 key={item.id}>{item.name}</h1>
        })}
      </main>
    )
  }
}

export default Demo
