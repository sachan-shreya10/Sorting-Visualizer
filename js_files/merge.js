// function to merge two subarrays into ones
async function merge(ele, low, mid, high) 
{
     // Maintain current index of sub-arrays and main array
	let i=low;   let j=mid+1;	let k=low;
    //creating a temporary array
    let b = new Array(100);

    //assigning colors to the two subarrays
    for (let q = 0; q < mid - low + 1; q++)
    {
        await wait(delay);
        ele[low + q].style.background = 'orange';
    }
    for (let q = 0; q < high - mid; q++) 
    {
        await wait(delay);
        ele[mid + 1 + q].style.background = 'yellow';
    }
	await wait(delay);

    // Merging the sub arrays by pushing them into a temporary array
	while((i<=mid)&&(j<=high))
	{
		if(parseInt(ele[i].style.height) <= parseInt(ele[j].style.height))
		{
			if ((high -low +1) === ele.length) 
            {
                ele[k].style.background = 'chartreuse';
            }
            else 
            {
                ele[k].style.background = 'pink';
            }

			b[k]=ele[i].style.height;
			i=i+1;
		}
		else
		{
			if ((high -low +1) === ele.length) 
            {
                ele[k].style.background = 'chartreuse';
            }
            else 
            {
                ele[k].style.background = 'pink';
            }

			b[k]=ele[j].style.height;
			j=j+1;
		}
		k=k+1;
	}
    // Copy the remaining elements on right to temporary array , if there are any
	if(i>mid)
	{
		for(l=j;l<=high;l++)
		{
			await wait(delay);
			if ((high -low +1) === ele.length) 
            {
                ele[k].style.background = 'chartreuse';
            }
            else 
            {
                ele[k].style.background = 'pink';
            }
			b[k]=ele[l].style.height;
			k=k+1;
		}
	}
    // Copy the remaining elements on left to temporary array , if there are any
	else
	{
		for(l=i;l<=mid;l++)
		{
			await wait(delay);
			if ((high -low +1) === ele.length) 
            {
                ele[k].style.background = 'chartreuse';
            }
            else 
            {
                ele[k].style.background = 'pink';
            }
			b[k]=ele[l].style.height;
			k=k+1;
		}
	}
    // Copy the temporary array back to the main array
	for(k=low;k<=high;k++)
	{
		ele[k].style.height=b[k];
	}
}
// l is for left index and h is right index of the sub-array to be sorted 
async function mergeSort(ele, l, h) {

    if (l < h) {
        const m = l + Math.floor((h - l) / 2);
        await mergeSort(ele, l, m);
        await mergeSort(ele, m + 1, h);
        await merge(ele, l, m, h);
    }
}
// Selecting merge sort button and adding eventlistener
const mergeSortbtn = document.querySelector("#merge");
mergeSortbtn.addEventListener('click', async function () {
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let h = parseInt(ele.length) - 1;
    disableSortingBtn();
    disableNewArrayBtn();
    disableSizeSlider();
    await mergeSort(ele, l, h);
    enableSortingBtn();
    enableNewArrayBtn();
    enableSizeSlider();
   

});