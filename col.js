'use strict';

d3.csv("Col.csv").get(function(error, data){
	//console.log(data);

	let height = 300;
	let width = 500;

	let max = d3.max(data, function(d){return d.COV; });
	console.log(max);

});