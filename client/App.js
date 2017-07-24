import React from 'react'
import { gql, graphql } from 'react-apollo'

const MyQuery = gql`query { name }`

class App extends React.Component {
  render() {
    const {data: {name}} = this.props
    return (
      <div>
        hello {name}
      </div>
    )
  }
}

export default graphql(MyQuery)(App)
