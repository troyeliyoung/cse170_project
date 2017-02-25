var data = require('../people.json');

exports.view = function (req, res) {
	//var id = req.params.id;
	var name = req.params.name;
	console.log("The contact name is: " + name);
	//var contact = data.person[id];

	//for (i = 0; i < data.person.length; i++){
    //  if (data.person[i].id == id){
    //	var contact = data.person[i];
    //    		$(".contact_info").append(data.person[i].name);
    // }
    //}
    res.render('contact', {
    	'contactName': name
    	//'contactName': name
    	//'contactInfo': contactInfo
    });
};