// Exercise 6
// Instructions
let details = {
     my: 'name',
     is: 'Rudolf',
     the: 'raindeer'
 }
// Given the object above, console.log “my name is Rudolf the raindeer”

let str='';
for (let k in details){str+=(k+' '+details[k]+' ')}
console.log(str);


