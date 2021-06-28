function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2);
    
}
function returnLastTwoDrivers(drivers){
    return drivers.slice(2, 4);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
    
const createFareMultiplier =  function multiplier(fareValue){
    return function (value){
        return fareValue * value;
    }
}
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function(drivers, driversToReturn){
    return driversToReturn(drivers);
  }
  