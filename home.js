let values = [];
let w = 30;

function setup() {
    let canvas = createCanvas(500, 300);
    canvas.position(400, 200);
    // number of rectangles
    values = new Array(floor(500 / w));
    for (let i = 0; i < values.length; i++) {
        // height of rectangles
        values[i] = random(250);
        
    }
   
    
}

function draw() {
    background(255);

    for (let i = 0; i < values.length; i++) {
        noStroke();
     
            fill('#87ceeb');
        
        text(Math.round(values[i]), i * w, 35);

        rect(i * w, height - values[i], w, values[i]);
    }
    }
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




