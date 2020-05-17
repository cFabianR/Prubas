import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { select, scaleLinear, extent } from "d3";

const styleDefs = require("./bar.scss");


function RandomData() {
  const data = [...Array(10)].map((e, i) => {
    return {
      x: i,
      y: Math.random() * 40,
      temparature: Math.random() * 500
    };
  });
  return data;
}


const width = 600
const height = 500

const DrawGrapho = (props) => {
  useEffect(() => {
   d3.select('.drawGrapho > *').remove();
   draw(props)
 },[])
  return <div className="drawGrapho" />
}

var xScale = d3.scaleBand().range([0, 3*width/4]).padding(0.1),
    yScale = d3.scaleLinear().range([3*height/4, 0]);

const draw = (props) => {

    const data = RandomData()

    const margin = 50

    d3.select('.drawGrapho').append('svg')
     .attr("width", width - margin)
     .attr("height", height - margin)
     .attr('id', 'svg-bars')

    var g = d3.select('#svg-bars').append("g")
      .attr("transform", "translate(" + 50 + "," +30 + ")")
      .attr('id', 'g-bars');

    xScale.domain(data.map(function(d) { return d.x; }))
    yScale.domain([0, d3.max(data, function(d) { return d.y; })])


    console.log(data)

    var x_axis = d3.axisBottom()
          .scale(xScale);

    var y_axis = d3.axisLeft()
          .scale(yScale);

    d3.select('#g-bars').append("g")
       .call(y_axis)
       .append("text")
       .attr("transform", "rotate(-90)")
       .attr("y",15)
       .attr("dy", "-5.1em")
       .attr("text-anchor", "end")
       .attr("stroke", "black")
       .text("Stock Price");


    var xAxisTranslate = 3*height/4 ;

    d3.select('#g-bars').append("g")
        .attr("transform", "translate(0, " +  xAxisTranslate +")")
        .call(x_axis)
        .append("text")
        .attr("y",30)
        .attr("x",3*width/4)
        .attr("stroke", "black")
        .text("Year");

    d3.select('#g-bars').selectAll(".bar")
        .attr("transform", "translate(0, " + xAxisTranslate  +")")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return xScale(d.x); })
        .attr("y", function(d) { return yScale(d.y); })
        .attr("width", xScale.bandwidth())
        .attr("height",function(d) { return xAxisTranslate  - yScale(d.y); })
        .attr("fill", styleDefs.primaryColor)
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut)
        .transition()
         .ease(d3.easeLinear)
         .duration(400)
         .delay(function (d, i) {
             return i * 50;
         })
  }

  function handleMouseOver(d, i) {
    d3.select(this).attr('class', 'highlight');
    d3.select(this). transition()
      .duration(400)
      .attr('width', xScale.bandwidth() + 5)
      .attr("y", function(d) { return yScale(d.y)-5; })
      .attr("x", function(d) { return xScale(d.x)-2.5; })
      .attr("height", function(d) { return 3*height/4 + 5 - yScale(d.y); });


    d3.select('#g-bars').append("text")
      .attr('class', 'val')
      .attr("x", function() { return  xScale(d.x);})
      .attr("y", function() { return yScale(d.y) -15 ; })
      .text(function() {
        return [ '$' +d.y];  // Value of the text
    });
      console.log(d)
  }

  function handleMouseOut(d, i) {
    d3.select(this).attr('class', 'bar');
    d3.select(this).transition()
      .duration(400)
      .attr('width', xScale.bandwidth())
      .attr("y", function(d) { return yScale(d.y); })
      .attr("x", function(d) { return xScale(d.x); })
      .attr("height", function(d) { return 3*height/4 - yScale(d.y); });

    d3.selectAll('.val')
        .remove()
  }
export default DrawGrapho
