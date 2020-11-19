const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({

  image: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true
  },

  birth_day: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true,
  },

  estate: {
    type: String,
    require: true
  },

  city: {
    type: String,
    required: true
  },

  phone_number: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

UserSchema.plugin(mongoosePaginate);
mongoose.model( "User", UserSchema );