// Oh man! the boss is so happy he wants to give you a raise, but he doesn't know how to calculate it.
// create function calculateRaise with receives 3 parameters, the base salary, time in years working on the company, and the happiness of the boss level, which is a number from 0 (boss not happy) to 1 (boss is ecstatic!!)
// The function will calculate how much should be your raised based on the arguments as follows:
// For every 2 years you have been working on the company you will get an extra 10% of your base salary
// For every 3 years you have been working on the company you will get a bonus of 2% extra of your base salary
// For every 5 years you have been working on the company you will get a bonus of 1% extra of your base salary
// If the happiness of the boss is 0, you don't get a raise!, but if the happiness of the boss is 1, you will get DOUBLE!
// Account for all values in between of the happiness
// Example:
// calculateRaise(2000,10,0.5) -> 1160
// solve your exercise here below this line
const [,, baseSalary,yearsWorking,bossHappines] = process.argv;
const salary = parseInt(baseSalary);
const yearsWork = parseInt(yearsWorking);
const bosshappiness = 0|1 ;
const extra2years = yearsWork* 10/100;
const bonusOfExtra3years = extra2years *2/100;
const bonusOfExtra5years = extra2years *1/100;
const workedExtra3years =  salary +bonusOfExtra3years;
const workedExtra5years = salary + bonusOfExtra5years;



// solve your exercise above this line
// Once you've finished please uncomment the following line as we are going to use this function in the another exercise
// exports.calculateRaise = calculateRaise;
