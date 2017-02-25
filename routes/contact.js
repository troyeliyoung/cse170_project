var data = require('../people.json');

exports.view = function (req, res) {
	var id = req.params.id;
	console.log("The contact id is: " + id);

//	for (i = 0; i < data.person.length; i++){
//        if (data.person[i].name == name){
//        		$(".contact_info").append(data.person[i].name);
//        }
//    }
    res.render('contact', {
    	'contactID': id
    });
};