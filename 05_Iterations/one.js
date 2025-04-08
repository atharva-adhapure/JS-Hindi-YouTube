//for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(i);
}


// for (let i = 1; i <10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for(let j=1; j< 10; j++){
//       //  console.log(`Inner Loop value: ${j} and inner loop ${i}`);
//       console.log(i + '*' + j + "=" + i*j );
//     }
    
// }

let myArray = ["Batman", "Superman", "Flash"]
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);   
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("5 detected");  
//         break;
//     }
//     console.log(`Value of i :${index}`);    
// }


for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("5 detected");
        continue;
    }
    console.log(`Value of i :${index}`);    
}