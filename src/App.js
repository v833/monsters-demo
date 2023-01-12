import React, { useEffect, useState } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/serch-box.component'
import './App.css'

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  // const [title, setTitle] = useState('Monsters Rolodex')
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    console.log('useEffect: ')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users)
      })
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [searchField, monsters])

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }
  // const onTitleChange = (e) => {
  //   const searchFieldString = e.target.value.toLocaleLowerCase()
  //   setTitle(searchFieldString)
  // }

  return (
    <main className={'App'}>
      <h1 className={'app-title'}>Monsters Rolodex</h1>
      <SearchBox
        className={'monsters-search-box'}
        onChangeHandler={onSearchChange}
        placeholder={'search monsters'}
      ></SearchBox>
      <br />
      {/* <SearchBox
        className={'monsters-search-box'}
        onChangeHandler={onTitleChange}
        placeholder={'title'}
      ></SearchBox> */}
      <CardList monsters={filteredMonsters}></CardList>
    </main>
  )
}

// class App extends Component {
//   state = {
//     monsters: [],
//     searchField: ''
//   }
//   componentDidMount() {
//     console.log('componentDidMount: ')
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => {
//         console.log('users: ', users)
//         this.setState(() => ({ monsters: users }))
//       })
//   }
//   onSearchChange = (e) => {
//     const searchField = e.target.value.toLocaleLowerCase()
//     this.setState(() => {
//       return { searchField }
//     })
//   }
//   render() {
//     console.log('render: ')
//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this

//     const filteredMonsters = monsters.filter((item) => {
//       return item.name.toLocaleLowerCase().includes(searchField)
//     })
//     return (
//       <main className={'App'}>
//         <h1 className={'app-title'}>Monsters Rolodex</h1>
//         <SearchBox
//           className={'monsters-search-box'}
//           onChangeHandler={onSearchChange}
//           placeholder={'search monsters'}
//         ></SearchBox>
//         <CardList monsters={filteredMonsters}></CardList>
//       </main>
//     )
//   }
// }

export default App
