'use strict';

let dataArray = [25,26,27,28,30,34,37,44,55,66,77,88,67,58,78,89,90];
let dataYears = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2000','2011','2012','2013','2014','2015','2016','2017'];

let height = 200;
let width = 500;

let y =d3.scaleLinear()
	.domain([0,100])
	.range([height, 0]);

let yAxis = d3.axisLeft(y);

let area = d3.area()
	.x(function (d,i){return i*20; })
	.y0(height)
	.y1(function (d,i){return y(d); });

let svg = d3.select('body').append('svg')
	.attr('height', '100%')
	.attr('width', '100%');
svg.append('path').attr('d', area(dataArray))
svg.append('g').attr('class', 'axis y')
	.attr('transform', 'translate(50,40)')
	.call('yAxis');

