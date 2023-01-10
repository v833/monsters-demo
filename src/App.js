import React, { Component } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/serch-box.component'
import './App.css'

class App extends Component {
  state = {
    monsters: [],
    searchField: ''
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
      <main>
        <SearchBox
          className={'monsters-search-box'}
          onChangeHandler={onSearchChange}
          placeholder={'search monsters'}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </main>
    )
  }
}

export default App
