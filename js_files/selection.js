async function selectionSort()
{
    const ele=document.querySelectorAll(".bar");

    // One by one move boundary of unsorted subarray
    for(let i=0;i<ele.length;i++)
    {
        // Find the minimum element in unsorted array
        let min=i;
        ele[i].style.background="yellow";

        for(let j=i+1;j<ele.length;j++)
        {
            ele[j].style.background="red";
            await wait(delay);
            if(parseInt(ele[min].style.height)>parseInt(ele[j].style.height))
            {
                if(min!=i)
                {
                    ele[min].style.background="rgb(235, 145, 235)";
                }
                min=j;
            }
            else
            {
                ele[j].style.background="rgb(235, 145, 235)";
            }
        }

        await wait(delay);
        // Swap the found minimum element with the first element
        swap(ele[min],ele[i]);
        
        ele[min].style.background="rgb(235, 145, 235)";
        ele[i].style.background="chartreuse";
    }
}
// Selecting selection sort button and adding eventlistener
const selectionbtn=document.querySelector("#selection");
selectionbtn.addEventListener("click",async function(){
    disableSortingBtn();
    disableNewArrayBtn();
    disableSizeSlider();
    await selectionSort();
    enableSortingBtn();
    enableNewArrayBtn();
    enableSizeSlider();
});