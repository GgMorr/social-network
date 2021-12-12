const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema({

    username: {
        type: String,
        unique: true,
        trim: true,
        required: "Username required"

    },

    email: {
        type: String,
        unique: true,
        required: "Email required",
        match: [/.+@.+\..+/]
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      },

     thoughts: [
         {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
     }
    ]    
},
     
     {
        toJSON: {
          virtuals: true,
          getters: true
        },
        // prevents virtuals from creating duplicate of _id as `id`
        id: false
      }
    );
    
    // get total count of comments and replies on retrieval
    UserSchema.virtual('thoughtCount').get(function() {
      return this.thoughts.length;
    });

    

// CREATE USER MODEL
const User = model('User', UserSchema);


//EXPORT USER MODEL
module.exports = User;