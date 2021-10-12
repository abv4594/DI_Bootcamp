const NumbersArr = [1,2,3,4,5,6,7,8,9];

//QuickSort using recurrance;

function qSort(numArr) {

    //special case: numArr has length equals 1
    if (numArr.length===1) {return numArr}

    //slice:
    let numArrL=numArr[0];
    let numArrR=numArr.slice(1);

    //want descending, so Left has to be bigger.
    if (numArrL<numArrR[0]) { //if left is smaller then we return the switched version calling the function with the old right}
        return(qSort(numArrR) + [numArrL])
        
    } else { //if left is bigger, then it's in the right position, we run only to the right
        return ([numArrL]+qSort(numArrR))
    }
}


console.log(qSort(NumbersArr));