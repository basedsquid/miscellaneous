var entry = [
    {title: 'Alien Generator', date: new Date('2021-02-10'), address: "https://i-alexis.github.io/project3/"}, 
    {title: 'Sunburn', date: new Date('2021-08-28'), address: ""},
    {title: 'CLOSENESS', date: new Date('2021-08-30'), address: ""},
    {title: 'big booty hoes', date: new Date('2021-10-20'), address: ""}
];
//SORT FUNCTIONS
function datesort(descending=false){
    if(descending === true){
        return entry.sort((b, a) => a.date - b.date)
    }
    else{
        return entry.sort((a, b) => a.date - b.date)
    }
    
}

// console.log(sortByDate())
// console.log(sortByDate(true))

function writeout(){
    for(i=0; i<entry.length; i++){

        let listentry=document.createElement("button");
        let entrydisplay=document.getElementById("entrydisplay");
        listentry.innerHTML = (entry[i].title)+"_"+(entry[i].date.getUTCMonth())+"_"+(entry[i].date.getUTCDay())+"_"+(entry[i].date.getUTCFullYear())
        entrydisplay.appendChild(listentry);
        // listentry.onclick = function () {
        //     location.href = entry[i].address;
        };

}
function sortalpha(){
    return entry.sort((a,b) => {
        var aUpper = a.title.toUpperCase()
        var bUpper = b.title.toUpperCase()
        if(aUpper > bUpper){
            return 1;
        }
        else if(aUpper < bUpper){
            return -1;
        }
        else{
            return 0;
        }   
        }
    )
  

}
// console.log(sortalpha())

// console.log(entry[1].date.toDateString())
  writeout(entry.title);
