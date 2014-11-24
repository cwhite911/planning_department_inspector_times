/**
 * InspectionsController
 *
 * @description :: Server-side logic for managing inspections
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
		//Get Inspection for a single inpspector
		getDay: function (req, res){
			var values = req.allParams();
			Inspections.find({
				where: {
					PERM_INSPECTOR_NAME: values.name,
					UPDATE_DATE : {
    				'contains' : values.date
  				}
				}
			}, function(err, data){
					console.log('Request for ' + values.name + ' on ' + values.date);
					if (err){
						res.status(400).end();
					}
					data.forEach(function(rec){
						//Converts text date to time
							rec.time = Date.parse(rec.UPDATE_DATE.slice(0, -2));
					});
					res.send(data);
			});
		}
};
