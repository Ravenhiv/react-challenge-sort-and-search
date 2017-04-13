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
      currentUsers: this.props.users,
      name: false,
      age: false
    }

    this.handleUserClick = this.handleUserClick.bind(this)
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.handleSortName = this.handleSortName.bind(this)
  }

  handleUserClick(id) {
    const activeUser = this.props.users.find(user => user.id === id)
    this.setState({activeUser})
  }

  handleSearchInput(event) {
    const filterText = event.target.value.toLowerCase()
    const currentUsers = this.props.users.filter(user => {
      return user.name.toLowerCase().includes(filterText)
    })
    this.setState({ currentUsers, activeUser: currentUsers[0] })
  }

  handleSortName(sortTitle) {
    const x = this.state[sortTitle] ? -1 : 1
    const sorted = this.state.currentUsers.sort((a, b) => {
      if (a[sortTitle] < b[sortTitle]) return x * (-1)
      if (a[sortTitle] > b[sortTitle]) return x
      return 0
    })
    if (sortTitle === 'name') {
      this.setState(
        {
          activeUser: this.state.currentUsers[0],
          currentUsers: sorted,
          name: !this.state.name,
          age: false
        }
      )
    } else {
      this.setState(
        {
          activeUser: this.state.currentUsers[0],
          currentUsers: sorted,
          age: !this.state.age,
          name: false
        }
      )
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="container-fluid">
          <SearchBar handleSearchInput={this.handleSearchInput} />
          <Toolbar handleSortName={this.handleSortName} />
          <div className="row">
            <ActiveUser user={this.state.activeUser} />
            <UserList
              currentUsers={this.state.currentUsers}
              searchText={this.state.searchText}
              handleUserClick={this.handleUserClick}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
