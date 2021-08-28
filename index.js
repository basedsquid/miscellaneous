var entry = [
    {title: 'Alien Generator', date: new Date('2021-02-10')},
    {title: 'Sunburn', date: new Date('2021-08-28')},
    {title: 'CLOSENESS', date: new Date('2021-08-30')},
    {title: 'big booty hoes', date: new Date('2021-10-20')},
];

function sortByDate(descending=false){
    if(descending === true){
        return entry.sort((b, a) => a.date - b.date)
    }
    else{
        return entry.sort((a, b) => a.date - b.date)
    }
}

console.log(sortByDate())
console.log(sortByDate(true))