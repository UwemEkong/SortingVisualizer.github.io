let values = [];
let w = 30;
let states = [];

function setup() {
    let canvas = createCanvas(500, 300);
    canvas.position(400, 300);
    // number of rectangles
    values = new Array(floor(500 / w));
    for (let i = 0; i < values.length; i++) {
        // height of rectangles
        values[i] = random(250);
        states[i] = -1;
    }
    selectionSort(values);
}

function draw() {
    background(255);

    for (let i = 0; i < values.length; i++) {
        noStroke();
        if (states[i] == 0) {
            fill('#E0777D');
        } else if (states[i] == 1) {
            fill('#D6FFB7');
        } else {
            fill('#87ceeb');
        }
        text(Math.round(values[i]), i * w, 35);

        rect(i * w, height - values[i], w, values[i]);

    }
}

async function selectionSort(arr) {
    let temp = 0;
    let minValue = 0;
    let minIndex = 0;
    for (let i = 0; i < values.length; i++) {
        minValue = arr[i];
        minIndex = i;
       
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < minValue) {
                minValue = arr[j];
                minIndex = j;
             
                }
            if (minValue < arr[i]) {
                await swap(arr, i, minIndex);
                 states[i] = 0;
                
            }
           
        }
       
    }

states[arr.length-1] = 0;
}

async function swap(arr, a, b) {
    await sleep(300);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}