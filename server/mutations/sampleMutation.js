import {mutationWithClientMutationId} from 'graphql-relay'
import {GraphQLString, GraphQLInt} from 'graphql'

const sampleMutation = mutationWithClientMutationId({
  name: 'SampleMutation',
  inputFields: {
    name: GraphQLString
  },
  outputFields: {
    name: {type: GraphQLString}
  },
  mutateAndGetPayload: async data => {
    return {name: data.name}
  }
})

export default sampleMutation
