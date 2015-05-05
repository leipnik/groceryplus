var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var GroceryItem = mongoose.model('GroceryItem');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// list grocery items
router.get('/items', function(req, res, next) {
  GroceryItem.find(function(err, groceryItems){
  	if(err) {	return next(err); }

  	res.json(groceryItems);
  });
});
// new grocery item
router.post('/items', function(req, res, next) {
	var groceryItem = new GroceryItem(req.body);

	groceryItem.save(function(err, groceryItem) {
		if (err) { return next(err); }

		res.json(groceryItem);
	})
});
// grocery item route parameter
router.param('item', function(req, res, next, id) {
	var query = GroceryItem.findById(id);

	query.exec(function(err, groceryItem) {
		if (err) { return next(err); }
		if (!groceryItem) { return next(new Error('can\'t find post with id ' + id)); }

		req.groceryItem = groceryItem;
		return next();
	});
});
// grocery item update (only title and done, not createdOn)
router.post('/items/:item/update', function(req, res) {
	var groceryItem = new GroceryItem(req.body);
	req.groceryItem.title = groceryItem.title;
	req.groceryItem.done = groceryItem.done;
	req.groceryItem.save(function(err, groceryItem) {
		if(err) { return next(err); }
		res.json(groceryItem);
	});
})
// grocery item update
router.post('/items/:item/delete', function(req, res) {
	var groceryItem = new GroceryItem(req.body);
	GroceryItem.findById(groceryItem.id).remove().exec();
	res.end();
})
// grocery item lookup
router.get('/items/:item', function(req, res) {
	res.json(req.groceryItem);
})

module.exports = router;
