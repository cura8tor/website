const functions = require('firebase-functions')
// CORS Express middleware to enable CORS Requests.
const cors = require('cors')({origin: true})
// [END additionalimports]
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.fetchUser = functions.https.onRequest((req, res) => {
  let postId = req.query.postId || req.body.postId
  
  cors(req, res, () => {
    const handlePost = (data) => {
      data.forEach(s => {
        if (s.key === postId) {
          const post = {user: null}
          Object.assign(post, s.val())
          admin.auth().getUser(s.val().userId)
          .then(u => {
            post.user = u
            res.status(200).send(post)
          })
        }
      })
    }

    admin.database().ref('items')
    .once('value')
    .then(handlePost)
    .catch(e => res.status(500).send(e))
  })
})
