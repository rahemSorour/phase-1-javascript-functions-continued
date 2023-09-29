// code your solution here

function saturdayFun(activity ='roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

saturdayFun();
let activity="bathe my dog"
console.log(saturdayFun(activity));

function mondayWork(activity ='go to the office'){
    return `This Monday, I will ${activity}.`; 
}
console.log(mondayWork())
let activity2="work from home."
console.log(mondayWork(activity2))

function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
const encouragingPromptFunction = wrapAdjective()
const message = encouragingPromptFunction("a hard worker");
console.log(message);

const encouragingPromptFunction2 = wrapAdjective("||")
const message2 = encouragingPromptFunction2("a dedicated programmer")
console.log(message2);


