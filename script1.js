

//<<<<<<< HEAD

d3.select(".graphInfo").classed("boxonload",true);

//=======
//>>>>>>> 8eff5f594bff8fb156b99582700e1656e7bcebb3

// set the dimensions and marginCs of the graph
var marginC = {top: 50, right: 50, bottom: 100, left: 50},
    widthC = d3.select("#chart").node().clientWidth - marginC.left - marginC.right,
    heightC = d3.select("#chart").node().clientHeight - marginC.top - marginC.bottom;



var curveArray = [
    {"d3Curve":d3.curveStepAfter,"curveTitle":"Population"}
  ];

// parse the date / time
var parseTime = d3.timeParse("%Y");

// set the ranges
var X = d3.scaleTime().domain([1800,2030]).range([0, widthC]);
var Y = d3.scaleLinear().range([heightC, 0]);
//var y = d3.scaleLog().base(Math.E).domain([0, 15]).range([height, 0]);

// define the line
var valueline = d3.line()

    .curve(d3.curveCatmullRomOpen)
    .x(function(d) { return X(d.date); })
    .y(function(d) { return Y(d.close); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left marginC
var Csvg = d3.select("#chart").append("svg")
    .attr("class", "Chloesvg")
    .attr("width", widthC + marginC.left + marginC.right)
    .attr("height", heightC + marginC.top + marginC.bottom)
  .append("g")
    .attr("transform",
          "translate(" + marginC.left + "," + marginC.top + ")")
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
    X.domain(d3.extent(data, function(d) { return d.date; }));
    Y.domain(d3.extent(data, function(d) { return d.close; }));

    
  
      
      
   Csvg.append("path")
  .datum(data)
  .attr("class", "line")
  .attr("id", 'tag'+i) // assign ID
   .style("stroke-dasharray", ("3, 5"))
  .attr("d", d3.line()
               .curve(daCurve.d3Curve)
               .x(function(d) { return X(d.date); })
               .y(function(d) { return Y(d.close); })
           );
   Csvg.selectAll(".bar")
    .data(data.filter(function(d){return d.barchart!=0}))
    .enter().append("rect")
      .attr("class", "bar")     
      .attr("x", function(d) { return X(d.date); })
      .attr("y", function(d) { return Y(d.barchart); })
      .attr("width",widthC/(116/3))
      .attr("height", function(d) {return heightC-Y(d.close)});
  });    
   
 
    
  // Add the scatterplot
    
var filterDate = data.filter(function(d){
      
      return d.event!=="o"
    
  })    

    //console.log(filterDate);
    formatYear = d3.timeFormat("%Y");

  Csvg.selectAll(".dot")
      .data(filterDate)
    .enter().append("circle")
    .attr("class","dot")
      .attr("r", 5)
      .attr("cx", function(d) { return X(d.date); })
      .attr("cy", function(d) { //console.log(d);
        return Y(d.close); })
    
    .on("mouseover",function(d){
      d3.select(this).attr("r", 7);
      Csvg.append("text").attr("class","mouseText").text(formatYear(d.date)).attr("x", X(d.date))
      .attr("y", Y(d.close)-20);
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
  Csvg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + heightC + ")")
      .call(d3.axisBottom(X));
//    svg.append("text").attr("class","mouseText").text("x axis").attr("x", width/2)
//      .attr("y", height+15);

  // Add the Y Axis
  Csvg.append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(Y));
    Csvg.append("text").attr("class","yaxisname").text("Elephant Population in Millions").attr("x", -310)
      .attr("y", -28).attr("transform", "rotate(-90)");
});
