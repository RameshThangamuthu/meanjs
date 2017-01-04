var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: {type: String, index: true},
    username: {type: String, unique: true},
    password: String,
});


//Like DB triggers, you can do pre and post
UserSchema.pre('save', function(next) {
	console.log('about to save');
	next();
});


//Mongoose lets you configure a lot more options like default values, custom getters/setters, virtual attributes, custom methods and statics, custom validation, custom references to other document inside a document about which you can learn more on the respective links.

mongoose.model('User', UserSchema);