var mongoose = require('mongoose');

var GroceryItemSchema = new mongoose.Schema({
	title: String,
	done: { type: Boolean, default: false },
	createdOn: { type: Date, default: new Date() }
});

mongoose.model('GroceryItem', GroceryItemSchema);