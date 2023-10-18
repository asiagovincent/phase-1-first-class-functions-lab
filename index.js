// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  

  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  

  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  
  const fareDoubler = createFareMultiplier(2);
  
  
  const fareTripler = createFareMultiplier(3);
  
  
  const selectDifferentDrivers = function(drivers, driverFunction) {
    return driverFunction(drivers);
  };
  
  
  const drivers = ['driver1', 'driver2', 'driver3', 'driver4'];
  
  console.log('First Two Drivers:', returnFirstTwoDrivers(drivers));
  console.log('Last Two Drivers:', returnLastTwoDrivers(drivers));
  console.log('Fare Doubled:', fareDoubler(10));
  console.log('Fare Tripled:', fareTripler(10));
  console.log('Selected Drivers:', selectDifferentDrivers(drivers, returnFirstTwoDrivers));
  