// ***************** STRING LENGTH ****************

// // ***********Slice****************

// var month = prompt("Enter month name");

// if(month.length > 3){
//     console.log(month.slice(0,3));
    
// ******************************

// var text = prompt("Enter Any Text Here");
// var count = 0;

// for(i = 0 ; i < text.length ; i++){
    
//     if(text.slice(i,i + 2) === "mm"){
//         console.log("mm not allowed");
//         count++
//     }
    
// }
// console.log(count);

// *******************************

// Replacing one word with another

// var text = prompt("Enter any text here");

// for(i = 0; i < text.length; i++){
//     if(text.slice(i, i+10) === "javascript"){

//         console.log("python" + text.slice(i+10));
        
//     }
// }


// ***********************************

// var text = "javascript is a programming language  programming programming programming"

// for(i = 0; i < text.length; i++){
//     if(text.slice(i, i+11) === "programming"){

//        text = (text.slice(0,i) + "frontend" + text.slice(i+11));
        
//     }
// }
// console.log(text);

// ******************

// ******************** REPLACE *************

// var text = "javascript is a programming language programmingprogrammingprogramming";
// console.log(text.replace(/programming/g, "frontend")); //g replaces globally

//console.log(text.replaceAll("programming", "frontend"));


