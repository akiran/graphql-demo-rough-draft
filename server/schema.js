import {GraphQLSchema} from 'graphql'

// import mutationType from './mutations'
import queryType from './types/queryType'

export default new GraphQLSchema({
  query: queryType,
  // mutation: mutationType
})
