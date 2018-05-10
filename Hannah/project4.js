function tusks(){
    return "tusks.png";
}
document.getElementById("tusks").src = tusks();

var tusk = d3.select("#tusk")
    .attr("width", 1000)
    .attr("height", 1000);

var rectangle = tusk.select("#rect1")
    .attr("x", 50)
    .attr("y", 250)
    .attr("width", 250)
    .attr("height", 10);
//108,184,260,336, 413, 600

var rectangle1 = tusk.select("#rect2")
    .attr("x", 330)
    .attr("y", 670)
    .attr("width", 10)
    .attr("height", 150);
//85, 140, 210, 280, 335, 400

var piano = d3.select("#piano")
var statues = d3.select("#statues")
var wind = d3.select("#wind")
var jewelry = d3.select("#jewelry")
//var furniture = d3.select("#furniture")
var chess = d3.select("#chess")
var button = d3.select(".button")


piano.on("click", function(){
    piano.style("color", "#614150")
    rectangle.attr("height", 184)
    rectangle1.attr("width", 140)
    
    statues.style("color", "#7d96a0")
    wind.style("color", "#7d96a0")
    jewelry.style("color", "#7d96a0")
//    furniture.style("color", "black")
    chess.style("color", "#7d96a0")
//    button.style("color", "black");
})


statues.on("click", function(){
    statues.style("color", "#614150")
    rectangle.attr("height", 336) 
    rectangle1.attr("width", 280)
    
    piano.style("color", "#7d96a0")
    wind.style("color", "#7d96a0")
    jewelry.style("color", "#7d96a0")
//    furniture.style("color", "black")
    chess.style("color", "#7d96a0")
    
//    button.style("color", "black");
})


wind.on("click", function(){
    wind.style("color", "#614150")
    rectangle.attr("height", 108)
    rectangle1.attr("width", 85)
    
    piano.style("color", "#7d96a0")
    statues.style("color", "#7d96a0")
    jewelry.style("color", "#7d96a0")
//    furniture.style("color", "black")
    chess.style("color", "#7d96a0")
    
//    button.style("color", "black");
})

jewelry.on("click", function(){
    jewelry.style("color", "#614150")
    rectangle.attr("height", 108)
    rectangle1.attr("width", 85)
    
    piano.style("color", "#7d96a0")
    statues.style("color", "#7d96a0")
    wind.style("color", "#7d96a0")
//    furniture.style("color", "black")
    chess.style("color", "#7d96a0")
//    button.style("color", "black");
})

//furniture.on("click", function(){
//    furniture.style("color", "maroon")
//    rectangle.attr("height", 413) 
//    rectangle1.attr("width", 400)
//    
//    piano.style("color", "black")
//    statues.style("color", "black")
//    wind.style("color", "black")
//    jewelry.style("color", "black")
//    chess.style("color", "black")
////    button.style("color", "black");
//})

chess.on("click", function(){
    chess.style("color", "#614150")
    rectangle.attr("height", 413) 
    rectangle1.attr("width", 335)
    
    piano.style("color", "#7d96a0")
    statues.style("color", "#7d96a0")
    wind.style("color", "#7d96a0")
    jewelry.style("color", "#7d96a0")
//    furniture.style("color", "black")
//    button.style("color", "black");
})
