exports.sign_up = function(req,res) {
	res.send("Formulaire d'inscription");
};

exports.inscription_page = function(req,res) {
	res.render('layout_page.ejs',{titre:'Inscription',page:'partials/inscription.ejs'});
};


