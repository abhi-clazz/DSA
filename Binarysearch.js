const binarySearch=(inputArray,element)=>
{
    let begin=0;
    let end=inputArray.length-1;
    let index=-1
    while(begin<=end)
    {
        let middle=Math.floor((begin+end)/2)
        if(inputArray[middle]===element) return middle
        else if(inputArray[middle]>element) end=middle-1;
           else  begin=middle+1;
    }
    return -1;//When element is not found
}
