var yr = 2003;

var numPies = 5;  // total west central east south
var regions = ["total","west","central","east","south"];

var radius = 72;

// colors
var color = d3.scaleOrdinal(["#71353e", "#33222a"]);

var pie = d3.pie()
    .sort(null);

var path = d3.arc()   // circle
    .outerRadius(radius) // radius - x where x is margin
    .innerRadius(36);  // center circle

var label = d3.arc()  // label locations
    .outerRadius(radius - 18)   // should be the same for inner and outer
    .innerRadius(radius - 18);

var legend = d3.select("#legend-wrapper");

updateData();

function updateData() {

  d3.selectAll(".piechart").remove();
  d3.selectAll(".elephant").remove();

  d3.csv("Lucia/data/" + "PIKE_africa/" + yr + ".csv", function(d) {
    // console.log(d);
    d.total= +d.total;
    d.west = +d.west;
    d.central = +d.central;
    d.east = +d.east;
    d.south = +d.south;
    d.totalcarc = +d.totalcarc;
    d.westcarc = +d.westcarc;
    d.centralcarc = +d.centralcarc;
    d.eastcarc = +d.eastcarc;
    d.southcarc = +d.southcarc;
    return d;
  }, function(error, data) {
    if (error) throw error;

    // console.log(data);
    // console.log(data[0]["total"]);

    for (i = 0; i < numPies; i++) {   // make 5 pie charts
      var svg = d3.select("#piechart-wrapper")
          .data(data)
        .append("svg")
          .attr("width", 160)
          .attr("height", 160)
          .attr("class","piechart"),
        g = svg.append("g").attr("transform", "translate(" + 80 + "," + 80 + ")");
      svg.append("text")
        .attr("transform", "translate(" + 80 + "," + 80 + ")")
        .attr("dy", "0.5em")
        .attr("class","region")
        .text(regions[i])
        .style("fill","#7d96a0");

      if (i == 0) {
        pie.value(function(d) { return d.total; });
        var arc = g.selectAll(".arc")
          .data(pie(data))
          .enter().append("g")
            .attr("class", "arc");
        arc.append("path")
          .transition()
          .duration(200)
          .attr("d", path)
          // .attr("stroke", "#7d96a0")
          .attr("fill", function(d) { return color(d.data.total); });
        arc.append("text")
          .transition()
          .duration(200)
          .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
          .attr("dy", "0.35em")
          .attr("fill", "#ce974b")
          .attr("opacity", ".75")
          .text(function(d) { if (d.index == 0) {
            return (round(d.data.total*100, 0)) + "%"}
          });

      } else if (i == 1) {
        pie.value(function(d) { return d.west; });
        var arc = g.selectAll(".arc")
          .data(pie(data))
          .enter().append("g")
            .attr("class", "arc");
        arc.append("path")
          .transition()
          .duration(200)
          .attr("d", path)
          .attr("fill", function(d) { return color(d.data.west); })
        arc.append("text")
          .transition()
          .duration(200)
          .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
          .attr("dy", "0.35em")
          .attr("fill", "#ce974b")
          .attr("opacity", ".75")
          .text(function(d) { if (d.index == 0) {
            return (round(d.data.west*100, 0)) + "%"}
          });

      } else if (i == 2) {
        pie.value(function(d) { return d.central; });
        var arc = g.selectAll(".arc")
          .data(pie(data))
          .enter().append("g")
            .attr("class", "arc");
        arc.append("path")
          .transition()
          .duration(200)
          .attr("d", path)
          .attr("fill", function(d) { return color(d.data.central); });
        arc.append("text")
          .transition()
          .duration(200)
          .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
          .attr("dy", "0.35em")
          .attr("fill", "#ce974b")
          .attr("opacity", ".75")
          .text(function(d) { if (d.index == 0) {
            return (round(d.data.central*100, 0)) + "%"}
          });

      } else if (i == 3) {
        pie.value(function(d) { return d.east; });
        var arc = g.selectAll(".arc")
          .data(pie(data))
          .enter().append("g")
            .attr("class", "arc");
        arc.append("path")
          .transition()
          .duration(200)
          .attr("d", path)
          .attr("fill", function(d) { return color(d.data.east); });
        arc.append("text")
          .transition()
          .duration(200)
          .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
          .attr("dy", "0.35em")
          .attr("fill", "#ce974b")
          .attr("opacity", ".75")
          .text(function(d) { if (d.index == 0) {
            return (round(d.data.east*100, 0)) + "%"}
          });

      } else if (i == 4) {
        pie.value(function(d) { return d.south; });
        var arc = g.selectAll(".arc")
          .data(pie(data))
          .enter().append("g")
            .attr("class", "arc");
        arc.append("path")
          .transition()
          .duration(200)
          .attr("d", path)
          .attr("fill", function(d) { return color(d.data.south); });
        arc.append("text")
          .transition()
          .duration(200)
          .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
          .attr("dy", "0.35em")
          .attr("fill", "#ce974b")
          .attr("opacity", ".75")
          .text(function(d) { if (d.index == 0) {
            return (round(d.data.south*100, 0)) + "%"}
          });
      }
    }

    // add elephant dots
    // console.log(data[0]["totalcarc"]);  // total
    // console.log(data[1]["totalcarc"]);  // illegal
    var numTotal = data[0]["totalcarc"];
    var numIllegal = data[1]["totalcarc"];
    var numLegal = numTotal - numIllegal;
    // console.log("height: " + Math.ceil(numTotal/50)*16);
    // console.log("height Illegal: " + Math.ceil(numIllegal/50)*16);
    // console.log("illegal: " + numIllegal);
    // console.log("total: " + numTotal);

    // ELEPHANTS
    document.getElementById("year").innerHTML = yr;
    document.getElementById("illegal").innerHTML = numIllegal;
    document.getElementById("total").innerHTML = numTotal;
    document.getElementById("elephant-wrapper").innerHTML = "<img class='elephant' src='Lucia/images/" + yr + ".svg'/>";
    
  });
}

// function to round number to certain precision
function round(number, precision) {
  var shift = function (number, precision, reverseShift) {
    if (reverseShift) {
      precision = -precision;
    }  
    var numArray = ("" + number).split("e");
    return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
  };
  return shift(Math.round(shift(number, precision, false)), precision, true);
}

function sizeElephant(maxWidth, total, select) {
  var proportion = select/total;
  var newWidth = proportion * maxWidth;
  return newWidth;
}