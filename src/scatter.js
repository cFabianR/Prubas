import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { select, scaleLinear, extent } from "d3";


function RandomData() {
  const data = [...Array(100)].map((e, i) => {
    return {
      x: Math.random() * 40,
      y: Math.random() * 40,
      temparature: Math.random() * 500
    };
  });
  return data;
}


const Scatter = (props) => {
  useEffect(() => {
   d3.select('.scatter > *').remove();
   draw(props)
 }, [props.shapes.length])
  console.log(props.shapes.length)
  return <div className="scatter" />
}


const draw = (props) => {
  const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  console.log(w,h)

  const data = RandomData(),
        margin = {
          top: 40,
          bottom: 40,
          left: 40,
          right: 40
        };

  const width = w - margin.right - margin.left,
        height = h - margin.top - margin.bottom;

  console.log(width,height)
  const xScale = scaleLinear()
      .domain(extent(data, d => d.x))
      .range([0, width]);

  const yScale = scaleLinear()
      .domain(extent(data, d => d.y))
      .range([height, 0]);

   d3.select('.scatter').append('svg')
    .attr("width", width)
    .attr("height", height)
    .attr('id', 'svg-scatter')
    .style("border", "1px solid black")


  console.log("datas")
  console.log(data)
  const circles = d3.select('#svg-scatter')
          .selectAll("circle")
          .data(data)
          .enter()
          .append("svg:circle")
          .attr("r", 4)
          .attr("cx", d => xScale(d.x))
          .attr("cy", d => yScale(d.y))
          .attr("fill", 'purple');

  d3.select('#svg-scatter')
  .append("g")
  .call(d3.axisLeft(yScale).tickFormat(function(d){
       return "$" + d;
   })
  .ticks(10))
  .append("text")
   .attr("transform", "rotate(-90)")
   .attr("y", 6)
   .attr("dy", "-5.1em")
   .attr("text-anchor", "end")
   .attr("stroke", "black")
   .text("Stock Price");

  }



var scale = d3.scaleLinear()
              .domain([d3.min(data, function(d) { return d.y; }), d3.max(data, function(d) { return d.y; })])
              .range([height/2, 0]);

var y_axis = d3.axisLeft()
              .scale(scale);

svg.append("g")
   .attr("transform", "translate(50, 10)")
   .call(y_axis);

export default Scatter
