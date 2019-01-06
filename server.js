const app = require('express')()
const bodyParser = require('body-parser')
//const cors = require('cors')

// const OktaJwtVerifier = require('@okta/jwt-verifier')

// const oktaJwtVerifier = new OktaJwtVerifier({
//   clientId: '{clientId}',
//   issuer: 'https://dev-926166.oktapreview.com/oauth2/default'
// })

//app.use(cors())
app.use(bodyParser.json())


// verify JWT token middleware
// app.use((req, res, next) => {
//   // require every request to have an authorization header
//   if (!req.headers.authorization) {
//     return next(new Error('Authorization header is required'))
//   }
//   let parts = req.headers.authorization.trim().split(' ')
//   let accessToken = parts.pop()
//   oktaJwtVerifier.verifyAccessToken(accessToken)
//     .then(jwt => {
//       req.user = {
//         uid: jwt.claims.uid,
//         email: jwt.claims.sub
//       }
//       next()
//     })
//     .catch(next) // jwt did not verify!
// })

const server = app.listen(3000, () => {
  console.log('listening to port localhost:3000')
})

const io = require('socket.io')(server)
io.on('connection', function (socket) {
  console.log(`A user connected on socket id: ${socket.id}`)
  socket.on('postChatMessage', function (msg) {
    io.emit('broadcastChatMessage', { "messageText": msg });
  })
})