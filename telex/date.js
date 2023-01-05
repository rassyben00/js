var realDate=document.getElementById("date");

date()
setInterval(date, 1000);

function date(){
    var currentDate=new Date();

    year = "" + currentDate.getFullYear();
    month = "" + (currentDate.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
    day = "" + currentDate.getDate(); if (day.length == 1) { day = "0" + day; }

    var whichDay=currentDate.getDay();

    switch(whichDay){
        case 0: whichDay="vasárnap"; break;
        case 1: whichDay="hétfő"; break;
        case 2: whichDay="kedd"; break;
        case 3: whichDay="szerda"; break;
        case 4: whichDay="csütörtök"; break;
        case 5: whichDay="péntek"; break;
        case 6: whichDay="szombat"; break;
    }

    return realDate.innerHTML=year +"."+ month +"."+ day +"., "+whichDay;
}