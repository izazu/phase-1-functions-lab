// Code your solution in this file
function distanceFromHqInBlocks(someValue) {
    if (42 > someValue) {
        return 42 -someValue;
    } else;
    return someValue - 42;
    
}


function distanceFromHqInFeet(someValue) {
    if (someValue>42) {
   
   return (someValue -42) *264;
  }
  else {
    return (42-someValue)*264; 
  }
}

  function distanceTravelledInFeet(start, destination) {
    if (destination>start) {
        return (destination - start) *264;
    }
    else {
    return (start-destination) *264;
}
  }
  
  function calculatesFarePrice(start, destination) {
    const distanceFeet = distanceTravelledInFeet(start,destination);
    if (distanceFeet<=400) {
        return 0;
    }
    else if (distanceFeet>400 && distanceFeet<=2000 ) {
        return ((distanceFeet - 400) * 2) / 100;
    }
    else if (distanceFeet > 2000 && distanceFeet < 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
   }

