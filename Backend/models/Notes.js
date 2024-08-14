const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');

const NotesSchema = new Schema({
  title : {
    type : string,
    required : true
  },
  discription:{
    type : string,
    required : true,

  },
  tag : {
    type : string,
    default : "General"
  },
  date : {
    type : Date,
    default : Date.now
  }
  });

  module.exports = mongoose.model('user',NotesSchema)