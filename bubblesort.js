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
    bubbleSort(values);
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

async function bubbleSort(arr) {
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length - i - 1; j++) {
            let a = values[j];
            let b = values[j + 1];
            states[j] = -1;
            states[j+1] = 0;
            if (a > b) {
                await swap(values, j, j + 1);
            }
             states[j] = 1;
        }
       
    }
    states[0] = 0;

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
