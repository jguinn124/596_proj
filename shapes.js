'use strict';
let dataArray = [5, 11, 19];

let svg = d3.select("body").append("svg")
	.attr("height", "100%")
	.attr("width", "100%");

svg.selectAll("rect")
	.data(dataArray)
	.enter().append("rect")
		.attr("height", function(d,i){return d*15;})
		.attr("width", "50")
		.attr("fill", "blue")
		.attr("x", function(d,i){return 60*i+30;})
		.attr("y", function(d,i){return 300-(d*15);});

svg.selectAll("circle")
	.data(dataArray)
	.enter().append("circle")
		.attr("cx", function(d,i){return 300+(i*20);})
		.attr("cy", "100")
		.attr("r", function(d,i){return d*3});