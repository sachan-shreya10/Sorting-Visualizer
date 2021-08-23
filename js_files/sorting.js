// function to swap two elements, used in multiple sorting algorithms
function swap(ele1,ele2)
{
    let temp=ele1.style.height;
    ele1.style.height=ele2.style.height;
    ele2.style.height=temp;
}
// Disables sorting buttons during sorting 
function disableSortingBtn(){
    document.querySelector("#bubble").disabled = true;
    document.querySelector("#insertion").disabled = true;
    document.querySelector("#merge").disabled = true;
    document.querySelector("#quick").disabled = true;
    document.querySelector("#selection").disabled = true;
}
// Enables sorting buttons after completion of sorting 
function enableSortingBtn(){
    document.querySelector("#bubble").disabled = false;
    document.querySelector("#insertion").disabled = false;
    document.querySelector("#merge").disabled = false;
    document.querySelector("#quick").disabled = false;
    document.querySelector("#selection").disabled = false;
}
// Disables array size slider during sorting 
function disableSizeSlider(){
    document.querySelector("#array_size").disabled = true;
}

// Enables array size slider after completion of sorting
function enableSizeSlider(){
    document.querySelector("#array_size").disabled = false;
}

// Disables new array button during sorting 
function disableNewArrayBtn(){
    document.querySelector(".btn-ar").disabled = true;
}

// Enables new array button after sorting
function enableNewArrayBtn(){
    document.querySelector(".btn-ar").disabled = false;
}
//used with async function to visualize changes that occur during sorting
function wait(milisec)
{
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}
// Selecting array size slider 
let arraySize = document.querySelector('#array_size');

// Event listener to update the bars on the page
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

// Default input for wait function (200ms)
let delay = 200;

// Selecting speed slider 
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

let array = [];

// Call to display bars right when you visit the site
createNewArray();

// To create new array 
function createNewArray(noOfBars=60) {
    // calling function to delete old bars 
    deleteChild();

    // creating an array of random numbers 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 200) + 1);
    }
   // select the div with id=bars
    const bars = document.querySelector("#bars");

    // create multiple div elements using loop and adding classes to target them using css and javascript
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('arr-bars');
        bars.appendChild(bar);
    }
}

//function to delete all the previous bars so that new can be added
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

// Selecting new array button and adding eventlistener
const newArray = document.querySelector(".btn-ar");
newArray.addEventListener("click", function(){
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});