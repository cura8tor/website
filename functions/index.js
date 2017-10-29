// [START import]
const functions = require('firebase-functions')
// [END import]

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const thumbnailCreator = require('./thumbnail')
const post = require('./post')

exports.thumbnail = functions.storage.object().onChange(thumbnailCreator.generateThumbnail)

exports.post = functions.https.onRequest(post.fetchUser)
