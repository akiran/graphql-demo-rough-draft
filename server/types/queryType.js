import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString
} from 'graphql'

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: async (_, args) => {
        return 'John'
      }
    },
  })
})

export default queryType
