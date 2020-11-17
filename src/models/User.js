const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  idade: {
    type: Number,
    required: true
  },

  description: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

UserSchema.plugin(mongoosePaginate);
mongoose.model( "User", UserSchema );