// Question 1 - Convert feet to mile.


function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;

}

var result = feetToMile(10000);
    result = result.toFixed(2);
    
console.log(result);


//Question 2 - Wood calculator.




function woodCalculator(chair, table , bed){
    var chairCount = chair*1;
    var tableCount = table*3;
    var bedCount = bed*5;
    totalWood = chairCount + tableCount + bedCount;
    return totalWood;

}

var neededWood = woodCalculator(10, 10, 2);
console.log(neededWood);






// Question 3 - Brick Calculator.


function brickCalculator(floors){
    if(floors <= 0) {
        return "Floor number cannot be 0 or negative."
    }
    else{
        if(floors <= 10){
            untilTenFloors = floors;
            return untilTenFloors * 15 * 1000;
        }
        else if((floors > 10) && (floors <= 20)){
            untilTenFloors = 10
            tenToTwentyFloors = floors - untilTenFloors;
            return ((untilTenFloors * 15 * 1000) + (tenToTwentyFloors * 12 * 1000));
        }
        else if(floors > 20) {
            untilTenFloors = 10
            twentyToFurther = floors - 20;
            return ((untilTenFloors * 15 * 1000) + (untilTenFloors * 12 * 1000) + (twentyToFurther * 10 * 1000));
            
        }
    }
}

var getYourBrickCount = brickCalculator(20)
console.log(getYourBrickCount);




// Question 4 - Shortest name from an Array.


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


// Assinment Finished