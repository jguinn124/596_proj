'use strict';


let width = 960,
	height = 500;

let svg = d3.select('body').append('svg')
	.attr('width', width)
	.attr('height', height);

svg.append('g')
	.attr('transform', 'translate(50,50) scale(2)')
	.append('rect')
	.attr('width', 140)
	.attr('height', 140)
	.on('mouseover', mouseover)
	.on('mousemove', mousemove)
	.on('mouseout', mouseout);

let div = d3.select('body').append('div')
	.attr('class', 'tooltip')
	.style('display', 'none');

function mouseover() {
	div.style('display', 'inline');
}

function mousemove() {
	div
		.text(d3.event.pageX + ', ' + d3.event.pageY)
		.style('left', d3.event.pageX + 'px')
		.style('top', d3.event.pageY + 'px');
}

function mouseout() {
	div.style('display', 'none');
}