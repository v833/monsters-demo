import React, { Component } from 'react'

class Demo extends Component {
  constructor() {
    console.log('constructor: ')
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    console.log('componentDidMount: ')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        console.log('users: ', users)
        this.setState(() => ({ monsters: users }))
      })
  }
  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }
  render() {
    console.log('render: ')
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchField)
    })
    return (
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={onSearchChange}
        />
        {filteredMonsters.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.name}</h1>
            </div>
          )
        })}
        {/* <button onClick={}></button> */}
      </main>
    )
  }
}

export default Demo
