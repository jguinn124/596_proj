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

let newX = 300;
svg.selectAll("circle.first")
	.data(dataArray)
	.enter().append("circle")
		.attr("class", "first")
		.attr("cx", function(d,i){
			newX+=(d*3)+(i*20);
			return newX;
		})
		.attr("cy", "100")
		.attr("r", function(d,i){return d*3});


newX = 600;
svg.selectAll("ellipse")
.data(dataArray)
.enter().append("ellipse")
	.attr("cx", function(d,i){
		newX+=(d*3)+(i*20);
		return newX;
	})
	.attr("cy", "100")
	.attr("rx", function(d,i){return d*3})
	.attr("ry", "30");


newX = 900;
svg.selectAll("line")
.data(dataArray)
.enter().append("line")
	.attr("cx", function(d,i){
		newX+=(d*3)+(i*20);
		return newX;
	})
	.attr("cy", "100")
	.attr("rx", function(d,i){return d*3})
	.attr("ry", "30");