var logger = require('./log');
logger.info('Node js started');

var calc = require('./calculator');
console.log("Result of Calculate : " + calc.calculate(20,30));
console.log("Result of Add function : " + calc.add(20,30));