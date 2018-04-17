var katzDeliLine = [];

// katzDeliLine
// takeANumber [1]
// takeANumber [1,2]
// nowServing [2]
// takeANumber [2,3]

var num = 0;

function takeANumber(katzDeliLine){
  num = num + 1;
  katzDeliLine.push(num);
  return "Welcome. You're number #" + num;
  
  // 'Welcome. You're number #'
}

// function takeANumber (katzDeliLine, name) {
//   katzDeliLine.push(name);
  
//   return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
// }

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  return "Currently serving " + katzDeliLine.shift() + ".";
}


function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  
  var line = [];
  for (var i = 0; i < katzDeliLine.length; i++) {
    var num = i + 1;
    var name = katzDeliLine[i];
    line.push(num + ". " + name);
  }
  
  return "The line is currently: " + line.join(', ');
}


