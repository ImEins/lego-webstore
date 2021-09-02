const manager = require('./manager');

exports.all_categories = function() {
  const db = manager.connect();
  const sql = 'select name from categories';
  const results = db.prepare(sql).all();
  db.close();
  return results;
};

exports.all_products = function () {
	const db = manager.connect();
	const sql = 'select categories.name as nameCat, products.name as nameProd, products.id as id, price, img0 from categories inner join products on id_category=categories.id';
	const results = db.prepare(sql).all();
	db.close();
	return results;
}

exports.get_product = function (idproduct) {
	const db = manager.connect();
	const sql = 'select categories.name as nameCat, products.name as nameProd, products.id as id, price, img0, img1, img2, img3, description, spec from categories inner join products on id_category=categories.id where products.id=?' ;
	const results = db.prepare(sql).get(idproduct);
	db.close();
	return results;
}
	
