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
    heapSort(values, 0, values.length-1); 
    
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


async function heapSort(arr) { 
   
        let n = arr.length; 
  
        // Build heap (rearrange array) 
        for (let i = n / 2 - 1; i >= 0; i--) 
            heapify(arr, n, i); 
  
        // One by one extract an element from heap 
        for (let i=n-1; i>0; i--) 
        { 
            // Move current root to end 
            let temp = arr[0]; 
            arr[0] = arr[i]; 
            arr[i] = temp; 
            
            states[0] = 1;
  
            // call max heapify on the reduced heap 
            heapify(arr, i, 0); 
             await sleep(800);
        } 
    } 
async function heapify( arr,  n, i) 
    { 
      
        let largest = i; // Initialize largest as root 
        let l = 2*i + 1; // left = 2*i + 1 
        let r = 2*i + 2; // right = 2*i + 2 
  
        // If left child is larger than root 
        if (l < n && arr[l] > arr[largest]) 
            largest = l; 
  
        // If right child is larger than largest so far 
        if (r < n && arr[r] > arr[largest]) 
            largest = r; 
  
        // If largest is not root 
        if (largest != i) 
        {   
          
            let swap = arr[i]; 
            arr[i] = arr[largest]; 
            
            arr[largest] = swap; 
            
            
            // Recursively heapify the affected sub-tree 
              
            heapify(arr, n, largest); 
        } 
    } 



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

