// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(driversArray,about){
    return driversArray.filter(item=>{
        return item.toLowerCase()===about.toLowerCase();
    })
}
const fuzzyMatch= function(driversArray, about){
    return driversArray.filter(driversArray=> {
        return driversArray.toLowerCase().substring(0,about.length)===about.toLowerCase()
    })

}
const matchName = function (driversArray,aboutFilter){
    return driversArray.filter(driversArray=> {
        return driversArray.name ===aboutFilter
    })

}