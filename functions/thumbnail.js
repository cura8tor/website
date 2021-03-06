
const functions = require('firebase-functions')

const gcs = require('@google-cloud/storage')()
const spawn = require('child-process-promise').spawn
const path = require('path')
const os = require('os')
const fs = require('fs')

exports.generateThumbnail = functions.storage.object().onChange(event => {
    const object = event.data // The Storage object.
  
    const fileBucket = object.bucket // The Storage bucket that contains the file.
    const filePath = object.name // File path in the bucket.
    const contentType = object.contentType // File content type.
  
      // The resourceState is 'exists' or 'not_exists' (for file/folder deletions).
    const resourceState = object.resourceState
  
      // Number of times metadata has been generated.New objects have a value of 1.index.js
    const metageneration = object.metageneration
  
      // [START stopConditions]
      // Exit if this is triggered on a file that is not an image.
    if (!contentType.startsWith('image/')) {
        console.log('This is not an image.')
        return
      }
  
      // Get the file name.
    const fileName = path.basename(filePath)
      // Exit if the image is already a thumbnail.
    if (fileName.startsWith('thumb_')) {
        console.log('Already a Thumbnail.')
        return
      }
  
      // Exit if this is a move or deletion event.
    if (resourceState === 'not_exists') {
      console.log('This is a deletion event.')
      return
      }
  
      // Exit if file exists but is not new and is only being triggered
      // because of a metadata change.
    if (resourceState === 'exists' && metageneration > 1) {
      console.log('This is a metadata change event.')
      return
      }
      // [END stopConditions]
  
    const bucket = gcs.bucket(fileBucket)
    const tempFilePath = path.join(os.tmpdir(), fileName)
    return bucket.file(filePath).download({
        destination: tempFilePath
      }).then(() => {
        console.log('Image downloaded locally to', tempFilePath)
        // Generate a thumbnail using ImageMagick.
        return spawn('convert', [tempFilePath, '-thumbnail', '200x200>', tempFilePath])
      }).then(() => {
        console.log('Thumbnail created at', tempFilePath)
        // We add a 'thumb_' prefix to thumbnails file name. That's where we'll upload the thumbnail.
        const thumbFileName = `thumb_${fileName}`
        const thumbFilePath = path.join(path.dirname(filePath), thumbFileName)
        // Uploading the thumbnail.
        return bucket.upload(tempFilePath, {destination: thumbFilePath})
      // Once the thumbnail has been uploaded delete the local file to free up disk space.
      }).then(() => fs.unlinkSync(tempFilePath))
      // [END thumbnailGeneration]
  })
  