let sportsOne: string[]=["Golf","Cricket","Tennis","Swimming"];

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

for(let tempSports of sportsOne){
    if(tempSports =="Cricket"){
        console.log(tempSports+"<< My Favourits !");
    }
    else{
        console.log(tempSports);
    }
}