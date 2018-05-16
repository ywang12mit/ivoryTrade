
var rectContainer = d3.select("#rectangle-container")
    .attr("width", 800)
    .attr("height", 600);

var rectangle = rectContainer.select("#rect1")      // IVORY
    .attr("x", 75)
    .attr("y", 230)
    .attr("width", 120)
    .attr("height", 10);
//95,168,244,323, 400, 530

var rectangle1 = rectContainer.select("#rect2")     // WOOD BRANCHES
    .attr("x", 280)
    .attr("y", 230)
    .attr("width", 220)
    .attr("height", 10);
//10x250, 180x110, 180x250, 320x110, 320x250, 500x110, 500x250

var rectangle2 = rectContainer.select("#rect3")     // ELEPHANTS KILLED
    .attr("x", 570)
    .attr("y", 230)
    .attr("width", 120)
    .attr("height", 10);
//132, 252, 372, 500

var piano = d3.select("#piano")
var statues = d3.select("#statues")
var wind = d3.select("#wind")
var jewelry = d3.select("#jewelry")
//var furniture = d3.select("#furniture")
var chess = d3.select("#chess")
var button = d3.select(".button")


piano.on("click", function(){
    piano.style("color", "#614150")
    rectangle.attr("height", 114)
    rectangle1.attr("width", 220)
    rectangle1.attr("height", 90)
    // rectangle2.attr("width", 360)
    rectangle2.attr("height", 120)
    
    statues.style("color", "#7d96a0")
    wind.style("color", "#7d96a0")
    jewelry.style("color", "#7d96a0")
//    furniture.style("color", "black")
    chess.style("color", "#7d96a0")
//    button.style("color", "black");
})


statues.on("click", function(){
    statues.style("color", "#614150")
    rectangle.attr("height", 208) 
    rectangle1.attr("width", 220)
    rectangle1.attr("height",160)
    // rectangle2.attr("width", 360)
    rectangle2.attr("height", 210)
    
    piano.style("color", "#7d96a0")
    wind.style("color", "#7d96a0")
    jewelry.style("color", "#7d96a0")
//    furniture.style("color", "black")
    chess.style("color", "#7d96a0")
    
//    button.style("color", "black");
})


wind.on("click", function(){
    wind.style("color", "#614150")
    rectangle.attr("height", 67)
    rectangle1.attr("width", 105)
    rectangle1.attr("height", 90)
    
    // rectangle2.attr("width", 180)
    rectangle2.attr("height", 120)
    
    piano.style("color", "#7d96a0")
    statues.style("color", "#7d96a0")
    jewelry.style("color", "#7d96a0")
//    furniture.style("color", "black")
    chess.style("color", "#7d96a0")
    
//    button.style("color", "black");
})

chess.on("click", function(){
    chess.style("color", "#614150")
    rectangle.attr("height", 256) 
    rectangle1.attr("width", 220)
    rectangle1.attr("height", 236)
    // rectangle2.attr("width", 360)
    rectangle2.attr("height", 300)
    
    piano.style("color", "#7d96a0")
    statues.style("color", "#7d96a0")
    wind.style("color", "#7d96a0")
    jewelry.style("color", "#7d96a0")
//    furniture.style("color", "black")
//    button.style("color", "black");
})

jewelry.on("click", function(){
    jewelry.style("color", "#614150")
    rectangle.attr("height", 67)
    rectangle1.attr("width", 105)
    rectangle1.attr("height", 90)
    // rectangle2.attr("width", 180)
    rectangle2.attr("height", 120)
    
    piano.style("color", "#7d96a0")
    statues.style("color", "#7d96a0")
    wind.style("color", "#7d96a0")
//    furniture.style("color", "black")
    chess.style("color", "#7d96a0")
//    button.style("color", "black");
})



