exports.viewProject = function(req, res) {
	// controller code
	var name = req.params.name;
	console.log("The Project name is : " + name);
	res.render('project', {
		'projectName' : name
	});
}