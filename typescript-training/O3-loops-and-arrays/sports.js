var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
/*
for(let i=0;i<sportsOne.length;i++){

    if(sportsOne[i]=="Cricket"){
        console.log("Cricket is my Fav Sports")
    }
    else{
        console.log(sportsOne[i]);

    }
    
}

*/
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSports = sportsOne_1[_i];
    if (tempSports == "Cricket") {
        console.log(tempSports + "<< My Favourits !");
    }
    else {
        console.log(tempSports);
    }
}
