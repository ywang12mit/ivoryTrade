var margin = {top: 0, right: 50, bottom: 20, left: 50},
    width = 800 - margin.left - margin.right,
    height = 120 - margin.bottom - margin.top;

var svg = d3.select("#slider-wrapper").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleLinear()
    .domain([2003, 2016])
    .range([0, width])
    .clamp(true);

var slider = svg.append("g")
    .attr("class", "slider")
    .attr("transform", "translate(0," + height / 2 + ")");

slider.append("line")
    .attr("class", "track")
    .attr("x1", x.range()[0])
    .attr("x2", x.range()[1])
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-inset")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function() { slider.interrupt(); })
        .on("start drag", function() { hue(x.invert(d3.event.x)); })
        .on("end", snap));

slider.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 28 + ")")
  .selectAll("text")
  .data(x.ticks(10))
  .enter().append("text")
    .attr("x", x)
    .attr("text-anchor", "middle")
    .attr("fill", "#7d96a0")
    .text(function(d) { return d; });

var handle = slider.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 8);

slider.transition() // Gratuitous intro!
    .duration(750);
    // // .tween("hue", function() {
    // //   var i = d3.interpolate(0, 70);
    // //   return function(t) { hue(i(t)); };
    // });

function hue(h) {
  handle.attr("cx", x(h));
}

function snap() {
  var value = x.invert(d3.event.x);
  console.log(value);
  var rounded = round(value, 0);
  handle.attr("cx", x(rounded));
  yr = rounded;
  updateData();
}
