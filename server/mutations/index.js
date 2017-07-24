import {GraphQLObjectType} from 'graphql'
import sampleMutation from './sampleMutation'

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    sampleMutation: sampleMutation
  })
})

export default mutationType
