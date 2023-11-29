/**
 * Example of a simple decorator
 * Also known as a higher order function
 *
 * Credit: https://blog.logrocket.com/understanding-javascript-decorators/
 */

const logger = (message) => console.log(message);

function loggerDecorator(logger) {
  return function (message) {
    logger.call(this, message);
    console.log('message logged at:', new Date().toLocaleString());
  };
}

const decoratedLogger = loggerDecorator(logger);
decoratedLogger('Hello World');
