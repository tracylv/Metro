var assert = require('assert')
  , tests
  , Product = geddy.model.Product;

tests = {

  'after': function (next) {
    // cleanup DB
    Product.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var product = Product.create({});
    product.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
