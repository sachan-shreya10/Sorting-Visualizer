async function bubbleSort()
{
    const ele=document.querySelectorAll(".bar");
    for(let i=0;i<ele.length-1;i++)
    {
        //last i elements are already in place
        for(j=0;j<ele.length-i-1;j++)
        {
            ele[j].style.background="red";
            ele[j+1].style.background="red";
            //smaller element comes first
            if(parseInt(ele[j].style.height)>parseInt(ele[j+1].style.height))
            {
                await wait(delay);
                swap(ele[j],ele[j+1]);

            }
            ele[j].style.background="rgb(235, 145, 235)";
            ele[j+1].style.background="rgb(235, 145, 235)";
        }
        ele[ele.length-i-1].style.background="chartreuse";
    }
    ele[0].style.background="chartreuse";
}
// Selecting bubble sort button and adding eventlistener
const bubblebtn=document.querySelector("#bubble");
bubblebtn.addEventListener("click",async function()
{
    disableSortingBtn();
    disableNewArrayBtn();
    disableSizeSlider();
    await bubbleSort();
    enableSortingBtn();
    enableNewArrayBtn();
    enableSizeSlider();
   
});
