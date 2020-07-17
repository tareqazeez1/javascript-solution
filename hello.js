// console.log("Hello World")

// function feetToMile(feet) {
//     var mile = feet / 5280;
//     return mile;

// }

// var result = feetToMile(100);
//     result = result.toFixed(2);
    
// console.log(result);



// function fruitCalculator(mango, apple){
//     var mangoCount = mango*4;
//     var appleCount = apple*4;
//     var total = mangoCount + appleCount;
//     return total;
// }

// var getTotal = fruitCalculator(5, 7);
// console.log(getTotal);

// ************************************* TINY FRND**********************************
// function tinyFriend(friends){
//     var shortLength = Infinity;
//     var shortest = "";
// }

//     if(friends.length > 0){
//         for (var i = 0; i <friends.length; i++){
//             if(typeof friends[i] == 'string' && friends[i].length < shortLength){
//                 shortest = friends[i];
//                 shortLength = friends[i].length;
//             }
//         }

//     }
//     return shortest;

//     var friends = ["Tareq", "Muntasir", "Robiul", "Moon", "Jamila", "Sany"];
//     var NameTinyFriend = tinyFriend(friends);
//     console.log(NameTinyFriend);

// function brickCalculator(floors){
//     if(floors <= 0) {
//         return "Floor number cannot be 0 or negative."
//     }
//     else{
//         if(floors <= 10){
//             untilTenFloors = floors;
//             return untilTenFloors * 15 * 1000;
//         }
//         else if((floors > 10) && (floors <= 20)){
//             untilTenFloors = 10
//             tenToTwentyFloors = floors - untilTenFloors;
//             return ((untilTenFloors * 15 * 1000) + (tenToTwentyFloors * 12 * 1000));
//         }
//         else if(floors > 20) {
//             untilTenFloors = 10
//             twentyToFurther = floors - 20;
//             return ((untilTenFloors * 15 * 1000) + (untilTenFloors * 12 * 1000) + (twentyToFurther * 10 * 1000));
            
//         }
//     }
// }

// var getYourBrickCount = brickCalculator(-3)
// console.log(getYourBrickCount);

function tinyFriend(friends) {
    
    var arrayOfFriend = friends[0];
    for (var i = 0; i < friends.length; i++) {
        var shortFriend = friends[i];
        var newShortFriend = friends[i].length;

        if (newShortFriend < arrayOfFriend.length) {
            arrayOfFriend = shortFriend;
        }
    }
    return arrayOfFriend;
}

var getTinyFriend = tinyFriend(["Faizul", "Tareq", "Sany", "Mirajul", "Shahjahan"]);
console.log(getTinyFriend);