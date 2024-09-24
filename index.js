// code your solution here
function saturdayFun( activity = 'roller-skate')  { 
    return `This Saturday, I want to ${activity}!`;
}     
function mondayWork  (activity = 'go to the office') {  
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(adjective = '*') { 
    const innerFunction = function(parameter = 'special') {
    return `You are ${adjective}${parameter}${adjective}!`;
    };
    return innerFunction
}