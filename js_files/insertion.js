async function insertionSort()
{
    const ele=document.querySelectorAll(".bar");
    ele[0].style.background ="cyan";
    for(let i=1;i<ele.length;i++)
    {
        let key=ele[i].style.height;
        ele[i].style.background="red";
        let j=i-1;
        await wait(delay);

         /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        
        while(j>=0 && (parseInt(ele[j].style.height)>parseInt(key)))
        {
            ele[j].style.background="red";
            ele[j+1].style.height=ele[j].style.height;
            j=j-1;
            await wait(delay);
            for(let k=i;k>=0;k--)
                ele[k].style.background="chartreuse";
        }
        ele[j+1].style.height=key;
        ele[i].style.background="chartreuse";
    }
}
// Selecting insertion sort button and adding eventlistener
const insertionbtn=document.querySelector("#insertion");
insertionbtn.addEventListener("click",async function(){
    disableSortingBtn();
    disableNewArrayBtn();
    disableSizeSlider();
    await insertionSort();
    enableSortingBtn();
    enableNewArrayBtn();
    enableSizeSlider();
});
