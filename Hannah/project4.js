function tusks(){
    return "tusks.png";
}
document.getElementById("tusks").src = tusks();

var tusk = d3.select("#tusk")
    .attr("width", 2000)
    .attr("height", 2000);

var rectangle = tusk.select("#rect1")
    .attr("x", 100)
    .attr("y", 380)
    .attr("width", 250)
    .attr("height", 10);
//95,168,244,323, 400, 530

var rectangle1 = tusk.select("#rect2")
    .attr("x", 900)
    .attr("y", 380)
    .attr("width", 250)
    .attr("height", 10);
//10x250, 180x110, 180x250, 320x110, 320x250, 500x110, 500x250

var rectangle2 = tusk.select("#rect3")
    .attr("x", 450)
    .attr("y", 380)
    .attr("width", 360)
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
    rectangle.attr("height", 168)
    rectangle1.attr("width", 250)
    rectangle1.attr("height",180)
    rectangle2.attr("width", 360)
    rectangle2.attr("height",132)
    
    statues.style("color", "#7d96a0")
    wind.style("color", "#7d96a0")
    jewelry.style("color", "#7d96a0")
//    furniture.style("color", "black")
    chess.style("color", "#7d96a0")
//    button.style("color", "black");
})


statues.on("click", function(){
    statues.style("color", "#614150")
    rectangle.attr("height", 323) 
    rectangle1.attr("width", 250)
    rectangle1.attr("height",320)
    rectangle2.attr("width", 360)
    rectangle2.attr("height",252)
    
    piano.style("color", "#7d96a0")
    wind.style("color", "#7d96a0")
    jewelry.style("color", "#7d96a0")
//    furniture.style("color", "black")
    chess.style("color", "#7d96a0")
    
//    button.style("color", "black");
})


wind.on("click", function(){
    wind.style("color", "#614150")
    rectangle.attr("height", 95)
    rectangle1.attr("width", 110)
    rectangle1.attr("height",180)
    
    rectangle2.attr("width", 180)
    rectangle2.attr("height",132)
    
    piano.style("color", "#7d96a0")
    statues.style("color", "#7d96a0")
    jewelry.style("color", "#7d96a0")
//    furniture.style("color", "black")
    chess.style("color", "#7d96a0")
    
//    button.style("color", "black");
})

jewelry.on("click", function(){
    jewelry.style("color", "#614150")
    rectangle.attr("height", 95)
    rectangle1.attr("width", 110)
    rectangle1.attr("height",180)
    rectangle2.attr("width", 180)
    rectangle2.attr("height",132)
    
    piano.style("color", "#7d96a0")
    statues.style("color", "#7d96a0")
    wind.style("color", "#7d96a0")
//    furniture.style("color", "black")
    chess.style("color", "#7d96a0")
//    button.style("color", "black");
})


chess.on("click", function(){
    chess.style("color", "#614150")
    rectangle.attr("height", 400) 
    rectangle1.attr("width", 250)
    rectangle1.attr("height",500)
    rectangle2.attr("width", 360)
    rectangle2.attr("height",372)
    
    
    piano.style("color", "#7d96a0")
    statues.style("color", "#7d96a0")
    wind.style("color", "#7d96a0")
    jewelry.style("color", "#7d96a0")
//    furniture.style("color", "black")
//    button.style("color", "black");
})
