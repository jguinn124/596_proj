'use strict';
let parseDate = d3.timeParse('%m/%d/%Y');

d3.csv('prices.csv')
	.row(function(d){ return {month: parseDate(d.month), price:Number(d.price.trim().slice(1))}; })
	.get(function(error,data){

		let tooltip = d3.select("body").append("div").style("opacity","0").style("position","absolute")

		let height = 300;
		let width = 500;

		let max = d3.max(data,function(d){ return d.price; });
		let minDate = d3.min(data,function(d){ return d.month; });
		let maxDate = d3.max(data,function(d){ return d.month; });

		let y = d3.scaleLinear()
			.domain([0,max])
			.range([height,0]);
		let x = d3.scaleTime()
			.domain([minDate,maxDate])
			.range([0,width]);
		let yAxis = d3.axisLeft(y);
		let xAxis = d3.axisBottom(x);

		let svg = d3.select('body').append('svg').attr('height','100%').attr('width','100%');

		let margin = {left:50,right:50,top:40,bottom:0};

		let chartGroup = svg.append('g')
			.attr('transform','translate('+margin.left+','+margin.top+')');

		let line = d3.line()
			.x(function(d){ return x(d.month); })
			.y(function(d){ return y(d.price); });

		chartGroup.append('path')
			.attr('d',line(data))
			.attr('stroke', 'blue')
			.attr('stroke-width', 2)
			.attr('fill', 'none')
			.on("mousemove", function(d){
					tooltip.style("opacity","1")
					.style("left",d3.event.pageX+"px")
					.style("top",d3.event.pageY+"px");

					console.log(x(d.month));
					console.log(y(d.price));

					tooltip.html();

			});

		chartGroup.append('g')
			.attr('class','x axis')
			.attr('transform','translate(0,'+height+')')
			.call(xAxis);

		chartGroup.append('g')
			.attr('class','y axis')
			.call(yAxis);


	})

