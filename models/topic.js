const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  title: String,
  body: String
})

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;