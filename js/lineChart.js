// lineChart.js


var app = angular.module("vp");

app.directive("lineChart", ["dataService", function( dataService ){
	return {
		restrict: "AE",
		scope: {
			menuBtn: "=",
			xAxis: "=",
			yAxis: "="
		},
		controller: function($scope, $element, $attrs){
		},
		template:"<div class='chart'></div>",

		link: function(scope, el, attrs){
			// console.log("dir link scope:", scope, el);	
			var del = d3.select(el[0]);
			del.style("display", "block");
			del.select(".chart").style({
				"width": attrs.width+"px",
				"height": attrs.height+"px",
				"border": "1px solid gray",
				"box-shadow":"2px 2px 5px 1px gray"
			});
			var svg = del.append("svg").attr({
				"width": attrs.width+"px",
				"height": attrs.height+"px",
			});
			
			var chartMargin = {top: 40, right: 70, bottom: 90, left: 12},//large space at the bottom for labels

			function draw(){
				
			}


			
		}
	};

});
