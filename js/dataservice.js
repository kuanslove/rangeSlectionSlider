// dataservice.js
var app = angular.module("vp");

app.service("dataService", ["$http", function($http){
	this.getFund = function(id){
		console.log("data fetched");
		var funds = [];
		for(var i=0; i<Math.random()*20; i++){
			var fund = {
				"id": i,
				"name": "lc"+i,
				"value":Math.random()*100
			};
			funds.push(fund);
		}
		return funds;
	};
}]);


app.service("", function(){

});

