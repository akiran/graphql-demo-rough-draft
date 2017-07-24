import express from 'express'
import graphQLHTTP from 'express-graphql'
import schema from './schema'

const app = express()
app.use(
  '/graphql',
  graphQLHTTP({
    graphiql: true,
    pretty: true,
    schema: schema
  })
)

app.get('/ping', async (req, res) => {
  res.json({status: 'success'})
})

app.listen('8000', () => {
  console.log('server started on 8000')
})
