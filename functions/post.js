const functions = require('firebase-functions')
// CORS Express middleware to enable CORS Requests.
const cors = require('cors')({origin: true})
// [END additionalimports]
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.fetchUser = functions.https.onRequest((req, res) => {
  let userId = req.query.userId || req.body.userId
  console.log(userId)
  cors(req, res, () => {
    admin.auth().getUser(userId)
        .then(s => res.status(200).send(s))
        .catch(e => res.status(500).send(e))
  })
})

/*
if (req.method === 'PUT' || req.method === 'GET') {
    res.status(403).send('Forbidden!')
  }
  let postId = JSON.stringify(req.query.postId) || JSON.stringify(req.body.postId)
  cors(req, res, () => {
    admin.database().ref('items').equalTo(postId)
    .once('value')
    .then(s => {
      console.log(s, s.val())
      res.status(200).send(s.val())
    })
    .catch(e => res.status(500).send(e))
    /* admin.database()
         .ref()
         .child(`items`)
         .equalTo(postId)
         .once('value', s => {
           console.log(s.val())
           res.status(200).send(s.val())
         })
        .catch(e => res.status(500).send(e))
      })*/
