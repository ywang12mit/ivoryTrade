

//<<<<<<< HEAD
//window.onerror = function() {
//    location.reload();
//}

d3.select(".graphInfo").classed("boxonload",true);

//=======
//>>>>>>> 8eff5f594bff8fb156b99582700e1656e7bcebb3

// set the dimensions and margins of the graph
var margin = {top: 50, right: 50, bottom: 100, left: 50},
    widthC = d3.select("#chart").node().clientWidth - margin.left - margin.right,
    heightC = d3.select("#chart").node().clientHeight - margin.top - margin.bottom;



var curveArray = [
    {"d3Curve":d3.curveStepAfter,"curveTitle":"Population"}
  ];

// parse the date / time
var parseTime = d3.timeParse("%Y");

// set the ranges
var x = d3.scaleTime().domain([1800,2030]).range([0, widthC]);
var y = d3.scaleLinear().range([heightC, 0]);
//var y = d3.scaleLog().base(Math.E).domain([0, 15]).range([height, 0]);

// define the line
var valueline = d3.line()

    .curve(d3.curveCatmullRomOpen)
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#chart").append("svg")

    .attr("widthC", widthC + margin.left + margin.right)
    .attr("heightC", heightC + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")")
;

// Get the data
d3.csv("chart1/data-3.csv", function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
      d.date = parseTime(d.date);
      d.close = +d.close;
      d.barchart =+d.barchart;
  });

  // set the colour scale
  //var color = d3.scaleOrdinal(d3.schemeCategory10);

  curveArray.forEach(function(daCurve,i) { 

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain(d3.extent(data, function(d) { return d.close; }));

    
   svg.append("path")
  .datum(data)
  .attr("class", "line")
  .attr("id", 'tag'+i) // assign ID
   .style("stroke-dasharray", ("3, 5"))
  .attr("d", d3.line()
               .curve(daCurve.d3Curve)
               .x(function(d) { return x(d.date); })
               .y(function(d) { return y(d.close); })
           );

   
    svg.selectAll(".bar")
    .data(data.filter(function(d){return d.barchart!=0}))
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.date); })
      .attr("y", function(d) { return y(d.barchart); })
      .attr("widthC",widthC/(116/2))
      .attr("heightC", function(d) {return heightC-y(d.close)});
  });
    
    
  // Add the scatterplot
    
var filterDate = data.filter(function(d){
      
      return d.event!=="o"
    
  })    

    //console.log(filterDate);
    formatYear = d3.timeFormat("%Y");

  svg.selectAll(".dot")
      .data(filterDate)
    .enter().append("circle")
    .attr("class","dot")
      .attr("r", 5)
      .attr("cx", function(d) { return x(d.date); })
      .attr("cy", function(d) { //console.log(d);
        return y(d.close); })
    
    .on("mouseover",function(d){
      d3.select(this).attr("r", 7);
      svg.append("text").attr("class","mouseText").text(formatYear(d.date)).attr("x", x(d.date))
      .attr("y", y(d.close)-20);
      console.log(formatYear(d.date));
  })
    .on("mouseleave",function(d){
      d3.select(this).attr("r", 4).attr("class","mouseTextLeave"); 
      d3.selectAll(".mouseText").remove();
        })
   
      .on("click",function(d){console.log(d);d3.select("#yr").html(formatYear(d.date));d3.select("#des").html(d.event);
      d3.select("#imgg").attr('src', d.img);
    d3.select(".graphInfo").classed("boxonload",false);

    });
    
   
  // Add the X Axis
  svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + heightC + ")")
      .call(d3.axisBottom(x));
//    svg.append("text").attr("class","mouseText").text("x axis").attr("x", width/2)
//      .attr("y", height+15);

  // Add the Y Axis
  svg.append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(y));
    svg.append("text").attr("class","yaxisname").text("Elephant Population in Millions").attr("x", -310)
      .attr("y", -28).attr("transform", "rotate(-90)");
});
