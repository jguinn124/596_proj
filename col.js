'use strict';

d3.csv("Col.csv").get(function(error, data){
	//console.log(data);

	let height = 300;
	let width = 500;

	let max = d3.max(data, function(d){return d.COV; });
	console.log(max);


	let maxYear = d3.max(data, function(d){return d.Year; });
	let minYear = d3.min(data, function(d){return d.Year; });

	let y = d3.scaleLinear()
					.domain(0,max)
					.range(height,0);
	
	let x = d3.scaleTime()
					.domain(minYear,maxYear)
					.range(0,width);

	let yAxis = d3.axisLeft(y);
	let xAxis = d3.axisBottom(x);

	let svg = d3.select("body").append("svg")
					.attr("height", "100%")
					.attr("width", "100%");

	let margin = {left:50, right:50, top:40, bottom:0};

	let chartGroup = svg.append("g")
					.attr("transform", "translate("+margin.left+","+margin.right+")");

	

});