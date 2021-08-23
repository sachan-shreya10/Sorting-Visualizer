// function takes first element as pivot, places the pivot element at its correct position in sorted
//array, and places all smaller (smaller than pivot) to left of pivot and all greater elements 
//to right of pivot 

async function partition(ele, l, h) {
    let i = l;
    let j = h;

    let p = ele[l]; //setting first element as pivot
    p.style.background = "yellow";

    while (i < j) {
        // If current element is smaller than the pivot
        while (parseInt(ele[i].style.height) <= parseInt(p.style.height) && i<h) {
            if (i != l){
                ele[i].style.background = "rgb(235, 145, 235)";
            }
            i++; // increment index of smaller element
            ele[i].style.background = "red";
            await wait(delay);
        }
        // If current element is greater than the pivot
        while (parseInt(ele[j].style.height) > parseInt(p.style.height) && j>l) {
            if (j != l) {
                ele[j].style.background = "rgb(235, 145, 235)";
            }
            j--; // decrement index of greater element
            ele[j].style.background = "orange";
            await wait(delay);
        }
        await wait(delay);
        if (i < j) {
            await wait(delay);
            swap(ele[i], ele[j]);
        }

    }
    await wait(delay);
    swap(ele[l], ele[j]);
    ele[l].style.background = "rgb(235, 145, 235)";
    ele[j].style.background = "chartreuse";

    await wait(delay);

    for (let k = 0; k < ele.length; k++) {

        if (ele[k].style.background != "chartreuse") {
            ele[k].style.background = "rgb(235, 145, 235)";
        }
    }
    return j;

}
// l is Starting index, h is Ending index 
async function quickSort(ele, l, h) {
    if (l < h) {

        // pivot is partitioning index, ele[p] is now at right place 
        let pivot = await partition(ele, l, h);

        // Separately sort elements before partition and after partition
        await quickSort(ele, l, pivot - 1);
        await quickSort(ele, pivot + 1, h);
    }
    else {
        if (l >= 0 && h >= 0 && l < ele.length && h < ele.length) {
            ele[h].style.background = "chartreuse";
            ele[l].style.background = "chartreuse";
        }
    }
}
// Selecting quick sort button and adding eventlistener
const quickbtn = document.querySelector("#quick");
quickbtn.addEventListener("click", async function () {
    let ele = document.querySelectorAll(".bar");
    let l = 0;
    let h = ele.length - 1;
    disableSortingBtn();
    disableNewArrayBtn();
    disableSizeSlider();
    await quickSort(ele, l, h);
    enableSortingBtn();
    enableNewArrayBtn();
    enableSizeSlider();

});