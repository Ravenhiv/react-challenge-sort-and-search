import React, { Component } from 'react'
import UserList from './UserList'
import Header from './Header'
import ActiveUser from './ActiveUser'
import SearchBar from './SearchBar'
import Toolbar from './Toolbar'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeUser: this.props.users[0],
      filteredUsers: this.props.users,
      searchText: '',
      sortedBy: {
        name: false,
        age: false
      }
    }

    this.handleUserClick = this.handleUserClick.bind(this)
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.handleSorting = this.handleSorting.bind(this)
    this.resetSorting = this.resetSorting.bind(this)
  }

  handleUserClick(id) {
    const activeUser = this.props.users.find(user => user.id === id)
    this.setState({activeUser})
  }

  handleSearchInput(event) {
    const searchText = event.target.value.toLowerCase()
    const filteredUsers = this.props.users.filter(user => {
      return user.name.toLowerCase().includes(searchText)
    })
    this.setState({
      filteredUsers,
      activeUser: filteredUsers[0],
      searchText
    })
  }

  handleSorting(type) {
    const direction = this.state.sortedBy[type] ? -1 : 1
    const filteredUsers = [...this.state.filteredUsers]
    const sorted = filteredUsers.sort((a, b) => {
      if (a[type] === b[type]) return 0
      return (a[type] > b[type]) ? direction : direction * -1
    })
    this.setState(
      {
        activeUser: this.state.filteredUsers[0],
        filteredUsers: sorted,
        sortedBy: {
          [type]: !this.state.sortedBy[type]
        }
      }
    )
  }

  resetSorting() {
    this.setState({
      activeUser: this.props.users[0],
      filteredUsers: this.props.users,
      searchText: ''
    })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="container-fluid">
          <SearchBar
            handleSearchInput={this.handleSearchInput}
            searchText={this.state.searchText}
          />
          <Toolbar
            handleSorting={this.handleSorting}
            resetSorting={this.resetSorting}
          />
          <div className="row">
            <ActiveUser user={this.state.activeUser} />
            <UserList
              filteredUsers={this.state.filteredUsers}
              handleUserClick={this.handleUserClick}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
