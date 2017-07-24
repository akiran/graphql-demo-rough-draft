import React from 'react'
import { gql, graphql } from 'react-apollo'

const MyQuery = gql`query { name }`

cosnt getStores = gpl`query { store }`

class AdCreate extends React.Component {
  searchBusiness(name) {
    this.props.data.setVariable({name})
    this.props.data.refetch()
  }
  render() {
    const {data: {name}} = this.props
    return (
      <div>
        <BusinessSearch searchBusiness={this.searchBusiness} />
        <SelectAndAddStores stores={this.props.data} />
      </div>
    )
  }
}
graphql(getStores)(AdCreate)

const addToStore = gpq`mutation{}`
class SelectAndAddStores extends React.Component {
  add() {
    this.props.mutate({
      variables: [] //listed of slected stores
    })
  }
  render() {
    return (
      <div>
        {this.props.stores.map(store => {
          return <input type='checkbox' />
        })}
        <button onClick={this.add}>AddStore</button>
      </div>
    )
  }
}
graphl(addToStore)(SelectAndAddStores)


class BusinessSearch extends React.Component {
  search() {
    this.props.searchBusiness(this.state.name)
  }
  render() {
    <div>
      <input placeholder='name' />
      <button onClick={this.search}>Search</button>
    </div>
  }
}

export default graphql(MyQuery)(App)
