function feetToMile(feet){
    if(feet<0){
        return "distance can't be negative";
    }
    const feetPerMile = 5280.0;
    var feetInMile = feet/feetPerMile;
    return feetInMile;
}

function woodCalculator(chair,table,bed){
    if(chair<0 || table<0 || bed<0){
        return "furniture can't be negative";
    }
    var woodChair = chair*1;
    var woodTable = table*3;
    var woodBed = bed*5;
    var totalWood = woodChair + woodTable + woodBed;
    return totalWood;
}

function brickCalculator(storey){
    if(storey<=0){
        return "Height can't be negative or zero";
    }
    var totalBrick = 0;
    if(storey<=10){
        totalBrick += (storey*15)*1000;
    }
    else if(storey<=20){
        totalBrick += (10*15)*1000;
        totalBrick += (storey-10)*12*1000;
    }else{
        totalBrick += (10*15)*1000;
        totalBrick += (10*12)*1000;
        totalBrick += (storey-20)*10*1000;
    }
    return totalBrick;
}

function tinyFriend(friendlist){
    if(friendlist.length==0){
        return "Empty friend list";
    }
    var min = friendlist[0].length;
    var tinyFriendList = []; //If there is more than one friend with minimum length
    for(var i = 1;i<friendlist.length;i++){
        if(friendlist[i].length<min){
            min = friendlist[i].length;
        }
    }
    for(var i = 0;i<friendlist.length;i++){
        if(friendlist[i].length==min && friendlist[i].length!="")
            tinyFriendList.push(friendlist[i]);
    }
    if(tinyFriendList.length==0)
        return "Empty friend list";
    if(tinyFriendList.length==1) return tinyFriendList[0];
    return tinyFriendList;
    
}

console.log(tinyFriend(["rr","ss"]));