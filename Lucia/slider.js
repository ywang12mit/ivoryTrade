var margin = {top: 20, right: 50, bottom: 20, left: 50},
    width = 800 - margin.left - margin.right,
    height = 120 - margin.bottom - margin.top;

var x = d3.scale.linear()
    .domain([2003, 2016]) // SLIDER RANGE
    .range([0, width])
    .clamp(true);

var brush = d3.svg.brush()
    .x(x)
    .extent([0, 0])
    .on("brush", brushed)
    .on("brushend", brushend);

var svg = d3.select("#slider-wrapper").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("g")
    .attr("class", "x Luciaaxis")
    .attr("transform", "translate(0," + height / 2 + ")")
    .call(d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(function(d) { return d; })  // SLIDER FORMAT
      .tickSize(0)
      .tickPadding(18))
      .style("fill","#7d96a0")
  .select(".domain")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "halo");

var slider = svg.append("g")
    .attr("class", "slider")
    .call(brush);

slider.selectAll(".extent,.resize")
    .remove();

slider.select(".background")
    .attr("height", height);

var handle = slider.append("circle")
    .attr("class", "handle")
    .attr("transform", "translate(0," + height / 2 + ")")
    .attr("r", 8);  // slider circle radius

slider
    .call(brush.event)
  .transition() // gratuitous intro!
    .duration(750)
    .call(brush.extent([2003, 2003])) // MUST BE FIRST VALUE I THINK
    .call(brush.event);

function brushed() {
  var value = brush.extent()[0];

  if (d3.event.sourceEvent) { // not a programmatic event
    value = x.invert(d3.mouse(this)[0]);
    brush.extent([value, value]);
  }

  handle.attr("cx", x(value));
}

function brushend() {
   if (!d3.event.sourceEvent) {
     return; // only transition after input
   }

   var value = brush.extent()[0];                    
   brush.extent([value, value]);    // value = value on slider on mouse up
   
   d3.select(this)
     .transition()
     .duration(0)
     .call(brush.event);                           
  
   d3.select(this)
     .transition()
     .call(brush.extent(brush.extent().map(function(d) { return d3.round(d, 0); }))) // SNAPS TO DIGIT at number 0
     .call(brush.event);

    yr = round(value,0);

    updateData();
 }