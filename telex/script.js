function date(){
    var currentDate=new Date();
    var year=currentDate.getFullYear();
    var month=currentDate.getMonth()+1;
    var day=currentDate.getDate();
    var daystring=currentDate.getDay();

    switch(daystring){
        case 0: daystring="vasárnap"; break;
        case 1: daystring="hétfő"; break;
        case 2: daystring="kedd"; break;
        case 3: daystring="szerda"; break;
        case 4: daystring="csütörtök"; break;
        case 5: daystring="péntek"; break;
        case 6: daystring="szombat"; break;
    }
    var fullDate=year +". "+ month +". "+ day +"., "+ daystring;
    return fullDate;
}


