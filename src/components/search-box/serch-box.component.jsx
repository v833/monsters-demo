import './search-box.styles.css'

const SearchBox = ({ onChangeHandler, placeholder, className }) => {
  return (
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  )
}

export default SearchBox

// class SearchBox extends Component {
//   state = {}
//   render() {
//     const { onChangeHandler, placeholder, className } = this.props
//     return (
//       <input
//         className={`search-box ${className}`}
//         type='search'
//         placeholder={placeholder}
//         onChange={onChangeHandler}
//       />
//     )
//   }
// }

// export default SearchBox
