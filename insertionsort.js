let values = [];
let w = 30;

let states = [];
window

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
    insertionSort(values);

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


async function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        
        let key = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            await sleep(300);
            
            
            arr[j + 1] = arr[j];
            states[j+1] = 0;
            j = j - 1;
        }
        arr[j + 1] = key;
        states[j+1] = 1;
        
    }

}




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
