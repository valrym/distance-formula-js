// Author: valrym
// Date: 29/5/18
// Purpose: Calculate distance in simple js environments
// Notes: made this in class lol

var point1 = ["-5","6"];
var point2 = ["-1","3"];

function distancef(){
 var exec1 = (point2[0] - point1[0]) * (point2[0] - point1[0])
 var exec2 = (point2[1] - point1[1]) * (point2[1] - point1[1])
 var distance = Math.sqrt(exec1 + exec2)
 return distance;
};

print(distancef());
