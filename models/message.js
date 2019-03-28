const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  title: String,
  body: String,
  topic: {type: Schema.Types.ObjectId, ref: 'Topic'}
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;